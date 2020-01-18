/* Duckduckgo Result */

let sites = document.getElementById("links");
let urls = sites.querySelectorAll(".result");
let countSite = 0;
for (let url of urls) {
  if (++countSite === 4) break;
  let urlName = url.querySelector(
    ".result__extras .result__extras__url .result__url"
  ).href;
  window.open(urlName);
}

/* Duckduckgo API description Information */
/* eslint-disable-next-line no-unused-vars */
async function description() {
  let query = "depth-first-search";
  const url = `https://api.duckduckgo.com/?q=${query}&format=json&pretty=1`;
  let response = await fetch(url);
  /* eslint-disable-next-line no-unused-vars */
  let data = await response.json();
}
