/* eslint-disable no-undef*/
let currentLocation = window.location.href;

if (currentLocation.includes("duckduckgo")) {
  chrome.runtime.sendMessage(
    {
      run: "Run background"
    },
    function(response) {
      console.log(response);
    }
  );
}
