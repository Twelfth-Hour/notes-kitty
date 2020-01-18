/* eslint-disable no-undef */
chrome.runtime.onInstalled.addListener(() => {
  chrome.runtime.onMessage.addListener(request => {
    if (request.run == "Run background") {
      chrome.tabs.onUpdated.addListener(tabId => {
        chrome.tabs.executeScript(tabId, 
          {
            file: "src/get-urls.js"
          },
          () => {
            chrome.runtime.reload();
            chrome.tabs.remove(tabId);
          }
        );
      });
    }
  });
});
