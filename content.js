function getDistributions(){
		var distributions = document.getElementsByClassName("distribution-details");
		console.log('tick')
		//console.log(distributions)
		if (distributions.length == 0 && timeout_count < 10){
			timeout_count++
			window.setTimeout(getDistributions,3000)
			return
		}else if(timeout_count>=10){
			timeout_count = 0
			return
		}
		
		for(var i=0;i<distributions.length;i++){
			distributions[i].addEventListener("contextmenu", function(e){
				var info = e.target
				var count = 0
				while (info.getAttribute('class') != 'distribution-details' && count < 30){
					info = info.parentElement;
					count ++
				}
				console.log('lookup finished')
				distribution_id = info.getAttribute('distribution-id')
				console.log(info.getAttribute('distribution-id'))
				chrome.runtime.sendMessage({"msg_type":"dist_id", "distribution_id":distribution_id})
			})
		}
	}


var timeout_count = 0
window.setTimeout(getDistributions, 3000);

var links = document.getElementsByTagName('li')
for(var i=0;i<links.length;i++){
		links[i].addEventListener("click", function(e){
			timeout_count = 0
			window.setTimeout(getDistributions,3000)
		})
	};