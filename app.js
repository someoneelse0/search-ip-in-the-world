let i=document.getElementsByTagName("input")[0];
let p=document.getElementsByTagName("p");
let btn=document.getElementsByTagName("button")[0];
let d=document.getElementById("map");
let a="";
let aa=[];
let la=0;
let ln=0;
function f(){
	axios.get("https://ipinfo.io/"+i.value)
		.then(function(res0){
			p[0].innerHTML="Data:";
			p[1].innerHTML="IP: "+res0.data.ip+"<br />Hostname: "+res0.data.hostname+"<br />City: "+res0.data.city+"<br />Region: "+res0.data.region+"<br />Country: "+res0.data.country+"<br />Location: "+res0.data.loc+"<br />Organization: "+res0.data.org+"<br />Postal: "+res0.data.postal+"<br />Timezone: "+res0.data.timezone+"<br />";
			aa=res0.data.loc.split(",");
			la=aa[0];
			ln=aa[1];
			function fm(){
			        var m={
		                	center:new google.maps.LatLng(la,ln),
		                	zoom:10,
		                	mapTypeId:google.maps.MapTypeId.HYBRID
		        	};
		        	var mp=new google.maps.Map(d,m);
		        	var mrkr=new google.maps.Marker({
		        	        position:new google.maps.LatLng(la,ln),
		        	});
		        	mrkr.setMap(mp);
		        	var iw=new google.maps.InfoWindow({
					content:"IP: "+res0.data.ip+"<br />CITY: "+res0.data.city+"<br />REGION: "+res0.data.region+"<br />COUNTRY: "+res0.data.country+"<br />ORGANIZATION: "+res0.data.org+"<br />TIMEZONE: "+res0.data.timezone,
		        	});
		        	google.maps.event.addListener(mrkr,"click",function(){iw.open(map,mrkr);});
			}
			google.maps.event.addDomListener(btn,"click",fm);
			p[2].innerHTML="If you want search again, first introduce the new ip and click the button<br />Note: Click the button again will display place coordinates of address that you has introduced in the following map";
			p[3].innerHTML="If you want to see place coordinates in the following map, click the button again";
			p[4].innerHTML="If you want donate in ETH: 0xcD7Bb53A258D441624A913e92D1B49920e2e1B5d | Thanks a lot<br/>If you want donate in USDT: 0xcD7Bb53A258D441624A913e92D1B49920e2e1B5d | Thanks a lot<br /><br />";
		})
		.catch(function(error){
			console.log(error);
			p[0].innerHTML=error;
		})
}
btn.addEventListener("click",function(event){
	event.preventDefault();
	f();
},false);
