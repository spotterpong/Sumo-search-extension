// sumo_content.js

var sumo_dist_id_from_qip

chrome.runtime.onMessage.addListener(
	function(request, sender, sendResponse){
		if(request.msg_type === 'sumo_send'){
			sumo_dist_id_from_qip = request.dist_id
			window.setTimeout(addIdToSearch, 1000);
		}
	})

function addIdToSearch(){
	search_boxes = document.getElementsByTagName('input')
	for(var i=0;i<search_boxes.length;i++){
		if(search_boxes[i].getAttribute('ng-model') == 'Ctrl.distID'){
			search_boxes[i].value = sumo_dist_id_from_qip;
			    var evt = document.createEvent("HTMLEvents");
    			evt.initEvent("input", false, true);
   				search_boxes[i].dispatchEvent(evt);
				submit_boxes = document.getElementsByTagName('button')

				//code to auto submit. Not useful till the dates can be changed.

				// for(var j=0;j<submit_boxes.length;j++){
				// 	if(submit_boxes[j].getAttribute('type')=='submit'){
				// 		submit_boxes[j].click()
				// 		return
				// 	}
				// }
		}
	}

}




