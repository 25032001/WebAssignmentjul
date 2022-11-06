var form = document.querySelector("form");
var search = document.getElementById("search");

var profile = document.getElementById("Profile");

let getGithubId = async (name) => {
  const url = `https://api.github.com/users/${name}`;
  const response = await fetch(url);
  const data = await response.json();
  console.log(data);
  showProfile(data);
};
var showProfile = (data) => {
  if (data.message == "Not Found") {
    profile.innerHTML = `<h2>Oops! Data not find</h2>`;
    return;
  }
  profile.innerHTML = `<div id="Profile">
    <div class="img">
      <img  src="${data.avatar_url}" alt="ing">
    </div>
   <div class="link-name">
    <h4 >${data.name}</h4>
    <a href="${data.html_url}" target="_blank">${data.html_url}</a>
   </div>`;
  var search = document.getElementById("search");
  search.value = "";
};

form.addEventListener("submit", function (event) {
  console.log(search.value);
  console.log("hhh");
  getGithubId(search.value);

  event.preventDefault();
});
