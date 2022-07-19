// const baseCoinAPI = "http://localhost:8080/";
// const apiVersion = "v1";
// //const apiKey = `&CMC_PRO_API_KEY=${REACT_APP_CMC_KEY}`;

// //Function to get the top 25 coins.
// const getCoins = async (endPoint) => {
//   let path = `${baseCoinAPI}${endPoint}`;
//   const fetchResult = await fetch(path);
//   const result = await fetchResult.json();
//   console.log(result)
//   if (fetchResult.ok) {
//     return result;
//   }
//   const responseError = {
//     type: "Error",
//     message: result.message || "Something went wrong",
//     data: result.data || "",
//     code: result.code || "",
//   };

//   let error = new Error();
//   error = { ...error, ...responseError };
//   throw error;
// };

// //DOM Manipulation to show all the coins and respective values
// const coins = getCoins("/cryptocurrency/listings/latest?limit=25");
// var mainContent = document.getElementById("main-content");
// if (coins.length > 0) {
//   coins.forEach((coin) => {
//     var content = document.createElement("div");
//     var paragraph = document.createElement("p");
//     paragraph.textContent = `${coin.name} - ${coin.quote.USD.price}`;
//     content.appendChild(paragraph);
//     mainContent.appendChild(content);
//   });
// }









// // chrome.runtime.onConnect.addListener(function(port) {
// //   console.assert(port.name === "http://localhost:8080");
// //   port.onMessage.addListener(function(msg) {
// //     if (msg.joke === "Knock knock")
// //       port.postMessage({question: "Who's there?"});
// //     else if (msg.answer === "Madame")
// //       port.postMessage({question: "Madame who?"});
// //     else if (msg.answer === "Madame... Bovary")
// //       port.postMessage({question: "I don't get it."});
// //   });
// // });
 chrome.webRequest.onSendHeaders.addListener(
   function(e){
     //console.log(e)
     //console.log(window.location.href)
    if(e.url.includes('http://localhost:8080')){
       console.log("data displaying")
       fetch("http://localhost:8083/api/saveQuery", {method:'POST', body: JSON.stringify(e), headers:{'content-Type': 'application/json'}})
     }

     console.log(e);
   },             // function
  {
     urls:["*://localhost:*/*"],
    types:["xmlhttprequest"],  
  
   },               
  ["requestHeaders"]         //  optional array of strings
 )

// The ID of the extension we want to talk to.
// chrome.runtime.onMessageExternal.addListener(
//   function(request, sender, sendResponse) {
//     console.log("response")
//     if (sender.url === blocklistedWebsite)
//       return;  // don't allow this web page access
//     if (request.openUrlInEditor)
//       openUrl(request.openUrlInEditor);
//   });

// var editorExtensionId = "oiejddehakafleopjpdbhpokfkofmjog";
// var url= "http://localhost:8080/*"

// // Make a simple request:
// chrome.runtime.sendMessage(editorExtensionId, {openUrlInEditor: url},
//   function(response) {
//     console.log("data")
//     if (!response.success)
//       handleError(url);
//   });