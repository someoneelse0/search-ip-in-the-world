let i=document.getElementsByTagName("input")[0];
let p=document.getElementsByTagName("p");
let a="";
function f(){
	axios.get("https://ipinfo.io/"+i.value)
		.then(function(res0){
			axios.get("https://json.geoiplookup.io/"+i.value)
				.then(function(res1){
					p[0].innerHTML="Data:";
					p[1].innerHTML="IP: "+res0.data.ip+"<br />Hostname: "+res0.data.hostname+"<br />City: "+res0.data.city+"<br />Region: "+res0.data.region+"<br />Country: "+res0.data.country+"<br />Location: "+res0.data.loc+"<br />Organization: "+res0.data.org+"<br />Postal: "+res0.data.postal+"<br />Timezone: "+res0.data.timezone+"<br />Currency code: "+res1.data.currency_code+"<br />Currency name: "+res1.data.currency_name+"<br />";
				});
			p[2].innerHTML="If you want search again, first introduce the new ip and reload this page<br />";
			//p[3].innerHTML="If you want donate in BTC: A  | Thanks a lot<br />If you want donate in ETH: A  | Thanks a lot<br/>If you want donate in USDT: A  | Thanks a lot<br /><br />";
		})
		.catch(function(error){
			console.log(error);
			p[0].innerHTML=error;
		})
}
document.getElementsByTagName("button")[0].addEventListener("click",function(event){
	event.preventDefault();
	f();
},false);
