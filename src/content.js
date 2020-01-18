/* eslint-disable no-undef*/
let currentLocation = window.location.href;

if (currentLocation.includes("duckduckgo")) {
  chrome.runtime.sendMessage(
    {
      message: "Run background"
    },
    function(response) {
      console.log(response);
    }
  );
}
