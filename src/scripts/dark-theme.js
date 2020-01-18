if (document.querySelector("body").style.backgroundColor == "rgb(18, 18, 18)") {
  document.querySelector("body").style.backgroundColor = "#fefefe";
  document.querySelector("body").style.color = "#111";
  document.querySelectorAll("pre").forEach(e => {
    e.style.backgroundColor = "#fefefe";
    e.style.color = "#111";
  });
  document.querySelectorAll("code").forEach(e => {
    e.style.backgroundColor = "#fefefe";
    e.style.color = "#111";
  });
} else {
  document.querySelector("body").style.backgroundColor = "#121212";
  document.querySelector("body").style.color = "#eee";
  document.querySelectorAll("pre").forEach(e => {
    e.style.backgroundColor = "#121212";
    e.style.color = "#eee";
  });
  document.querySelectorAll("code").forEach(e => {
    e.style.backgroundColor = "#121212";
    e.style.color = "#eee";
  });
}
