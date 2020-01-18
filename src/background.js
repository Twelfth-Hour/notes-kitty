/* eslint-disable no-undef */
chrome.runtime.onInstalled.addListener(() => {
  chrome.runtime.onMessage.addListener(request => {
    if (request.run == "Run background") {
      chrome.tabs.onUpdated.addListener(tabId => {
        chrome.tabs.executeScript(
          tabId,
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

  function handleUpload() {
    const CLIENT_ID = require("../config/credentials.json").CLIENT_ID;
    const API_KEY = require("../config/credentials.json").API_KEY;

    // Array of API discovery doc URLs for APIs used by the quickstart
    const DISCOVERY_DOCS = ['https://docs.googleapis.com/$discovery/rest?version=v1'];
    // Authorization scopes required by the API; multiple scopes can be
    // included, separated by spaces.
    const SCOPES = "https://www.googleapis.com/auth/documents.readonly";

  }

  chrome.contextMenus.create({
    "title" : "Add to notes-kitty",
    "contexts": ["page", "selection", "image", "link"],
    "onclick": handleUpload
  });
});
