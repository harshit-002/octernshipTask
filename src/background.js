
chrome.webNavigation.onCompleted.addListener(function(tab){
    if(tab.url.includes("github.com/")){
        console.log(tab.url);
        chrome.tabs.sendMessage(tab.tabId,tab.url,(response)=>{
            console.log(response);
        })    
    }
})



    

