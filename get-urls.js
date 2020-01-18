/* Duckduckgo Result */

let sites = document.getElementById("links");
let urls  = sites.querySelectorAll(".result");
let countSite = 0;
for (let url of urls) {
  if (++countSite === 4) 
    break;
  let urlName = url.querySelector(".result__extras .result__extras__url .result__url").href;
  window.open(urlName);
}