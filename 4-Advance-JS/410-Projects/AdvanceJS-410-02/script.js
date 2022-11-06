var form = document.querySelector("form");
var search = document.getElementById("search");

var profile = document.getElementById("Profile");

let getGithubId = async (name) => {
  const url = `https://www.dictionaryapi.com/api/v3/references/collegiate/json/${name}?key=279d8350-7f34-425d-9328-0cbee72b302d`;
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
   
 <div class="link-name">
  <h4 >${data[0].shortdef[0]}</h4>
  <audio  id="audi" controls style="width:350px">
  <source src="${data[0].hwi.prs[0].sound.audio}"type="" width="20px">
 
  </audio>
  
 </div>`;
};

form.addEventListener("submit", function (event) {
  console.log(search.value);
  console.log("hhh");
  getGithubId(search.value);

  event.preventDefault();
});
