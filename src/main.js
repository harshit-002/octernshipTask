(()=>{
    var username="";
    function insertAfter(newNode, existingNode) {
      existingNode.parentNode.insertBefore(newNode, existingNode.nextSibling);
    }

    // Function to add button to the profile page of github user .

    const addBtnOnProfile = async () => {
        const biodiv=document.getElementsByClassName("user-profile-bio ")[0];
        
        if(!document.getElementsByClassName("openSaucedExtBtn")[0]){
        
          var openSaucedbtn=document.createElement("button");
        
          openSaucedbtn.appendChild(document.createTextNode("View on OpenSauced"));
          openSaucedbtn.classList.add("openSaucedExtBtn")
          openSaucedbtn.classList.add("btn")
          insertAfter(openSaucedbtn,biodiv);

          openSaucedbtn.style.position="relative";
          openSaucedbtn.style.width="100%";
          openSaucedbtn.style.backgroundColor="#40C463"
          openSaucedbtn.style.borderRadius="6px";
          openSaucedbtn.style.border="0px solid";
          openSaucedbtn.style.margin="3% 0";
          
        }
    }

    //Function to check whether the github user is a openSauced member or not using opensauced api 

    function fetchAPIdata(url){
      fetch(url)
      .then(response => response.json())
      .then(data => {
       if(data.is_open_sauced_member)
       addBtnOnProfile();
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
     }
  
    // Function to extract username from the url

    function extractusername(tabUrl){                    
      var segments = tabUrl.split("/");
      username = segments[segments.length - 1]; 
      var url="https://api.opensauced.pizza/v1/users/"+username;
      fetchAPIdata(url);
    }

    //Recieve url from service worker background.js

    chrome.runtime.onMessage.addListener(      
      function(message, sender, sendResponse) {
        var tabUrl= message;
        extractusername(tabUrl);
        sendResponse("Url recieved");     
      }
    );
 
})();

