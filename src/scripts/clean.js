console.log("Clean Called");
/**
 *
 * @param {String} key key to search and remove from
 */
function removeClassAndId(key) {
  // * Remove elements with {key} in their class iff their class and id does not have main in it
  document
    .querySelectorAll(`[class*=${key}]:not([class*=main]):not([id*=main])`)
    .forEach(e => e.remove());
  document
    .querySelectorAll(`[id*=${key}]:not([class*=main]):not([id*=main])`)
    .forEach(e => e.remove());
}

/**
 *
 * @param {String} tag tag to remove
 */
function removeTag(tag) {
  document.querySelectorAll(tag).forEach(e => e.remove());
}

/**
 *
 * @param {String} query
 */
function removeQuery(query) {
  document.querySelectorAll(query).forEach(e => e.remove());
}

function setStyle() {
  document.querySelector(
    "body"
  ).innerHTML += `<link rel="stylesheet" href="//fonts.googleapis.com/css?family=Roboto:400,400italic,700,700italic">
<link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/normalize/5.0.0/normalize.css">
<link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/milligram/1.3.0/milligram.css">`;

  // document.querySelector("body").style.fontFamily = "Roboto";
  document.querySelector("body").style.fontSize = "1.5em";
  document.querySelector("body").style.lineHeight = "1.2em";
  document.querySelector("body").style.padding = "10px 15%";

  document.querySelectorAll("img").forEach(e => {
    e.style.maxWidth = "70%";
    e.style.objectFit = "contain";
  });
  document.querySelectorAll("table").forEach(e => (e.style.border = 1));
  document.querySelector("body").style.backgroundColor = "#fefefe";
  document.querySelector("body").style.color = "#111";
  document.querySelector("body").style.transition =
    "background-color 1s, color 1s";
  document.querySelector("body").style.webkitTransition =
    "background-color 1s, color 1s";
  document.querySelector("body").style.mozTransition =
    "background-color 1s, color 1s";
}

const siteConfig = {
  wikipedia: [
    ".mw-jump-link",
    "annotation",
    ".reference",
    ".mw-editsection",
    ".reflist",
    "#catlinks",
    "table.mbox-small.plainlinks.sistersitebox"
  ],
  hackerearth: [
    "div.left-section",
    "#live-events-trigger-data",
    "div.breadcrumb",
    "#tutorial-problem",
    ".load-all-comments"
  ],
  geeksforgeeks: [
    ".leftSideBarParent",
    "#scrollTopBtn",
    "#personalNoteDiv",
    ".recommendedPostsDiv",
    "#ide_link",
    "#secondary",
    "#gfg-side-sticky-tab",
    "#comment",
    "#practiceLinkDiv"
  ],
  javatpoint: [
    "#bottomnextup",
    "#bottomnext",
    ".nexttopicdiv",
    "[rel=nofollow]",
    ".firsthomecontent",
    "#right",
    "._ap_apex_ad"
  ],
  tutorialspoint: [".mini-logo", "ul.toc", ".nxt-btn", ".pre-btn"],
  medium: [
    ".aq.ec.ed.as.av",
    ".fd.b.fe.fp.fg.fq.fi.fr.fk.fs.fm.ft.cn",
    ".fu",
    ".bk.eu.lz.s.ak.mg.me.mh",
    ".ne.jd.n.ep.p",
    ".pe.r.pf.pg"
  ],
  w3schools: [
    ".w3-container",
    "#googleSearch",
    ".w3-clear.nextprev",
    "#right",
    "#w3-exerciseform"
  ]
};

function siteConfigClean() {
  Object.keys(siteConfig).forEach(domain =>
    siteConfig[domain].forEach(query => removeQuery(query))
  );
}

document.querySelector("*").removeAttribute("class");
document.querySelectorAll("*").forEach(e => e.removeAttribute("style"));

removeTag("script");
removeClassAndId("head");
removeClassAndId("menu");
removeClassAndId("nav");
removeClassAndId("footer");
removeClassAndId("ads");
removeClassAndId("nav");
removeClassAndId("notification");
removeClassAndId("hidden");
removeClassAndId("icon");
removeClassAndId("modal");
removeClassAndId("banner");
removeClassAndId("toolbar");
removeClassAndId("meta");
removeTag("nav");
removeTag("style");
removeTag("link");
removeTag("iframe");
removeTag("input");
removeTag("textarea");
removeTag("footer");
removeTag("header");
removeQuery("#goog-gt-tt");
siteConfigClean();
setStyle();

var title = document.title;
document.querySelector("head").innerHTML = `<title>${title}</title>`;

// ? Keep removing any incoming ads
window.setInterval(function() {
  removeTag("iframe");
  removeClassAndId("ads");
}, 100);

// ? After 10 seconds stop any loading
window.setTimeout(function() {
  window.stop();
  clearInterval();
}, 10000);
