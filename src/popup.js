async function handleDefine() {
  let query = document.getElementById("input-box").value;
  if (query === "") {
    document.getElementById("definition").innerHTML =
      "<code>Enter Search Query</code>";
    return;
  }
  const url = `https://api.duckduckgo.com/?q=${query}&format=json&pretty=1`;
  let response = await fetch(url);
  /* eslint-disable-next-line no-unused-vars */
  let { Abstract } = await response.json();
  if (Abstract === "") {
    Abstract = "<code>cannot find definition, try searching</code>";
  }
  document.getElementById("definition").innerHTML = reduceDefinition(Abstract);
}

function reduceDefinition(definition) {
  let strings = definition.replace(/([.?!])\s*(?=[A-Z])/g, "$1|").split("|");
  let final = "";
  let index = 0;
  while (final.length < 300 && index < strings.length) {
    final += strings[index];
    ++index;
  }
  return final;
}

function handleSearch() {
  let query = document.getElementById("input-box").value;
  const url = `https://duckduckgo.com/?q=${query}&hash=66a045b452102c59d840ec097d59d9467e13a3f34f6494e539ffd32c1bb35f188&ia=web`;
  /* eslint-disable-next-line no-undef */
  chrome.tabs.create({
    url: url
  });
}

document.getElementById("define-button").addEventListener("click", async () => {
  handleDefine();
});

document.getElementById("search-button").addEventListener("click", () => {
  handleSearch();
});

document.getElementById("clean-button").addEventListener("click", () => {
  /* eslint-disable-next-line no-undef*/
  chrome.tabs.executeScript({
    file: "src/scripts/clean.js"
  });
});

document.getElementById("dark-button").addEventListener("click", () => {
  /* eslint-disable-next-line no-undef*/
  chrome.tabs.executeScript({
    file: "src/scripts/dark-theme.js"
  });
});

document.getElementById("edit-button").addEventListener("click", () => {
  /* eslint-disable-next-line no-undef*/
  chrome.tabs.executeScript({
    file: "src/scripts/content-editable.js"
  });
});

document.getElementById("search-wikipedia").addEventListener("click", () => {
  let query = document.getElementById("input-box").value;
  const url = `https://duckduckgo.com/?q= !w ${query}`;
  window.open(url);
});

document.getElementById("search-github").addEventListener("click", () => {
  let query = document.getElementById("input-box").value;
  const url = `https://duckduckgo.com/?q= !gh ${query}`;
  window.open(url);
});

document
  .getElementById("search-stackoverflow")
  .addEventListener("click", () => {
    let query = document.getElementById("input-box").value;
    const url = `https://duckduckgo.com/?q= !so ${query}`;
    window.open(url);
  });

document.getElementById("search-wolfram").addEventListener("click", () => {
  let query = document.getElementById("input-box").value;
  const url = `https://duckduckgo.com/?q= !wolf ${query}`;
  window.open(url);
});

document.getElementById("search-scholar").addEventListener("click", () => {
  let query = document.getElementById("input-box").value;
  const url = `https://duckduckgo.com/?q= !scholar ${query}`;
  window.open(url);
});

document.getElementById("search-quora").addEventListener("click", () => {
  let query = document.getElementById("input-box").value;
  const url = `https://duckduckgo.com/?q= !q ${query}`;
  window.open(url);
});

document.getElementById("search-translate").addEventListener("click", () => {
  let query = document.getElementById("input-box").value;
  const url = `https://duckduckgo.com/?q= !tr ${query}`;
  window.open(url);
});

document.getElementById("search-youtube").addEventListener("click", () => {
  let query = document.getElementById("input-box").value;
  const url = `https://duckduckgo.com/?q= !yt ${query}`;
  window.open(url);
});

document.getElementById("search-linkedin").addEventListener("click", () => {
  let query = document.getElementById("input-box").value;
  const url = `https://duckduckgo.com/?q= !li ${query}`;
  window.open(url);
});
