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
  document.getElementById("definition").innerHTML = Abstract;
}

function handleSearch() {
  let query = document.getElementById("input-box").value;
  const url = `https://duckduckgo.com/?q=${query}&hash=66a045b452102c59d840ec097d59d9467e13a3f34f6494e539ffd32c1bb35f188&ia=web`;
  /* eslint-disable-next-line no-undef*/
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
