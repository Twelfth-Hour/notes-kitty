async function handleDefine() {
  let query = document.getElementById("input-box").value;
  const url = `https://api.duckduckgo.com/?q=${query}&format=json&pretty=1`;
  let response = await fetch(url);
  /* eslint-disable-next-line no-unused-vars */
  let data = await response.json();
  // alert(data.Abstract);
}

function handleSearch() {
  let query = document.getElementById("input-box").value;
  const url = `https://duckduckgo.com/?q=${query}`;
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
