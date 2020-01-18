/* eslint-disable no-undef*/
let currentLocation = window.location.href;

if (
  currentLocation.includes(
    "hash=66a045b452102c59d840ec097d59d9467e13a3f34f6494e539ffd32c1bb35f18"
  )
) {
  chrome.runtime.sendMessage({
    run: "Run background"
  });
}
