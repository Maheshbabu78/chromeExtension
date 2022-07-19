// document.addEventListener("DOMContentLoaded", () => {
//     console.log("data check")
//     var StartAutomation = document.getElementById("AutomationMenu");
//     StartAutomation.addEventListener("click", (e) => {
//       chrome.windows.create({
//         height: 1000,
//         width: 800,
//         url: chrome.runtime.getURL("file:///C:/Users/NMAHESHBABU/restApi/SeleniumTest/test-output/emailable-report.html"),
//         type: "popup",
//       });
//     });
//   });
let driver = new webdriver.Builder()
    .forBrowser('chrome')
    .usingServer('http://localhost:4444/wd/hub')
    .build();
    console.log(driver)
