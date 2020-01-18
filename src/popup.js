function handleDefine() {
  alert("Defining");
}

function handleSearch() {
  alert("Searching");
}

document.getElementById("define-button").addEventListener("click", () => {
  handleDefine();
});

document.getElementById("search-button").addEventListener("click", () => {
  handleSearch();
});
