/* eslint-disable no-undef*/
chrome.runtime.onInstalled.addListener(function () {
  chrome.runtime.onMessage.addListener(function (request) {
    if (request.run == "Run background") {
      chrome.tabs.onUpdated.addListener(function (tabId) {
        chrome.tabs.executeScript(
          {
            file: "src/get-urls.js"
          },
          function () {
            chrome.runtime.reload();
            chrome.tabs.remove(tabId);
          }
        );
      });
    }
  });
});
