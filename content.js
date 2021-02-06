function getElementByXpath(path) {
  return document.evaluate(path, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
}


// Listen for messages
chrome.runtime.onMessage.addListener(function (msg, sender, sendResponse) {
    // If the received message has the expected format...
    if (msg.text === 'report_back') {
        // Call the specified callback, passing
        // the web-page's DOM content as argument

		
		
		var target = document.querySelector(msg.ds);
		if(String(msg.is_href).toLowerCase() == 'true'){
			target = target.href
		}else{
			target = target.innerText
		}
		
		console.log(msg.is_href + " --- " + target)




		// XPath
		//var target = getElementByXpath("/html/body/main/div/div/div/div[2]/div[1]/ul[1]/li[1]/a/@href") 

		if(target){		
			sendResponse({magnet:target,index:msg.index});
		}else{
			sendResponse({magnet:null,index:msg.index});
		}
	}

});