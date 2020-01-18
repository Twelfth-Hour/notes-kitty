/* eslint-disable no-undef*/
chrome.runtime.onInstalled.addListener(function() {
  chrome.runtime.onMessage.addListener(function(message, _, sendResponse) {
    if(message == "Run background") {
      chrome.tabs.onUpdated.addListener(function() {

      });
      sendResponse("Query completed");
    }
  });
});