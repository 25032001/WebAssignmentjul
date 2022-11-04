function validationform(e) {
  e.preventDefault();
  var first_name = document.getElementById("first_name").value;
  var last_name = document.getElementById("last_name").value;
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  var telephone = document.getElementById("telephone").value;
  var bio = document.getElementById("bio").value;

  var first_namecheck = /^[0-9A-Za-z. ]{3,16}$/;
  var last_namecheck = /^[A-Za-z. ]{3,30}$/;
  var passwordcheck = /^(?=.*d)(?=.*[a-zA-Z]).{6,20}$/;
  var emailcheck = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/;
  var telephonecheck =
    /^(?:(?:\+|0{0,2})91(\s*[\ -]\s*)?|[0]?)?[789]\d{9}|(\d[ -]?){10}\d$/;
  var biocheck = /^[0-9A-Za-z. ]{10,}$/;

  if (first_namecheck.test(first_name)) {
    document.getElementById("firsterror").innerHTML = "";
  } else {
    document.getElementById("firsterror").innerHTML =
      "** First name must be alphanumeric and contain 3 to 16 characters";
  }
  if (last_namecheck.test(last_name)) {
    document.getElementById("lasterror").innerHTML = "";
  } else {
    document.getElementById("lasterror").innerHTML =
      "** Last name must be alphanumeric and contain 3 to 30 characters";
  }
  if (emailcheck.test(email)) {
    document.getElementById("emailerror").innerHTML = "";
  } else {
    document.getElementById("emailerror").innerHTML =
      "** Email must be a valid address, e.g. example@example.com";
  }
  if (passwordcheck.test(password)) {
    document.getElementById("passerror").innerHTML = "";
  } else {
    document.getElementById("passerror").innerHTML = "** Password is invalid";
  }
  if (telephonecheck.test(telephone)) {
    document.getElementById("telephoneerror").innerHTML = "";
  } else {
    document.getElementById("telephoneerror").innerHTML =
      "**Telephone is invalid";
  }
  if (biocheck.test(bio)) {
    document.getElementById("bioerror").innerHTML = "";
  } else {
    document.getElementById("bioerror").innerHTML =
      "**Your bio must be contain 10 to 50 characters";
  }
}

document.getElementById("submit").addEventListener("keyup", validationform);
