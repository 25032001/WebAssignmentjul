let firstName = document.getElementById("fname");
let lastName = document.getElementById("lname");
let country = document.getElementById("country");
let score = document.getElementById("score");
let addBtn = document.getElementById("add");

addBtn.addEventListener("click", getData);

function getData() {
  if (
    firstName.value == "" ||
    lastName.value == "" ||
    country.value == "" ||
    score.value == ""
  ) {
    document.getElementById("warn-msg").innerText = " All fields are required ";
  } else {
    document.getElementById("warn-msg").innerText = "";
    addData();
  }
}

function addData() {
  

  document.getElementById("info").innerHTML += `<div class="result">
    <div class="first">
      <p class="p">${firstName.value} ${lastName.value}</p>
  
    </div>
    <div class="cname">
      <p>${country.value}</p>
    </div>
    <div class="scores">
      <p>${score.value}</p>
    </div>
    <div class="delete">
      <div class="del icon" onclick="deleteData(this)">
      <i class="fa-solid fa-trash"></i>
      </div>
      <div class="del" onclick="plusData(this)">
        <p>+5</p>
      </div>
      <div class="del" onclick="minusData(this)">
        <p>-5</p>
      </div>
    </div>
  </div>`;

  firstName.value = "";
  lastName.value = "";
  country.value = "";
  score.value = "";
}

function deleteData(e) {
  e.parentElement.parentElement.remove();
}

function plusData(e) {
 
  e.parentElement.previousElementSibling.children[0].innerText =
    parseInt(e.parentElement.previousElementSibling.children[0].innerText) + 5;
}
function minusData(e) {
  e.parentElement.previousElementSibling.children[0].innerText =
    e.parentElement.previousElementSibling.children[0].innerText - 5;
}