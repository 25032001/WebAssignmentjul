const showres = (e) => {
  display(e.target.value);

  var h2 = document.getElementById("h2");
  h2.innerHTML = ` ${e.key} and ${e.keyCode} `;
  h2.style.opacity = 1;
  h2.style.color = "crimson";
  h2.style.font = "40px";
};

function display(element) {
  // console.log(element);
  const filter = countries_data.filter((value) => {
    if (value.name.startsWith(element)) {
      return true;
    }
    return false;
  });

  const parent = document.getElementById("table");
  parent.innerHTML = "";
  filter.forEach((e) => {
    const new_row = document.createElement("tr");
    const new_countries = document.createElement("td");
    var element = document.getElementById("table");
    element.style.fontSize = "70px";
    element.style.textAlign = "center";

    new_countries.innerHTML = e.name;
    new_row.appendChild(new_countries);
    parent.appendChild(new_row);
  });
}
function searchWithAnyWord() {
  var search_form = document.getElementById("search-field");
  search_form.value = "";
}
function searchWithStartingWord() {
  var search_form = document.getElementById("search-field");
  search_form.value = "";
}

document.getElementById("search-form").addEventListener("keyup", showres);
