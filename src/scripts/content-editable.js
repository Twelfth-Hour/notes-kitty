if (document.querySelector("body").getAttribute("contenteditable") == "true") {
  document
    .querySelectorAll("body")
    .forEach(e => e.setAttribute("contenteditable", "false"));
} else {
  document
    .querySelectorAll("body")
    .forEach(e => e.setAttribute("contenteditable", "true"));
}
