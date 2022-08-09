let form = document.querySelector("#form");
let name = document.querySelector("#name");
let email = document.querySelector("#email");
let phone = document.querySelector("#phone");
let password = document.querySelector("#password");

form.addEventListener("submit", (e) => {
  let nameValue = name.value.trim();
  let emailValue = email.value.trim();
  let phoneValue = phone.value.trim();
  let passwordValue = password.value.trim();

  if (nameValue == "") {
    e.preventDefault();
    alert("please provide the name!");
    name.focus();
    return false;
  }

  if (!isNaN(nameValue)) {
    e.preventDefault();
    alert("please provide the valid name!");
    name.focus();
    return false;
  }
  if (emailValue == "") {
    e.preventDefault();
    alert("please provide an email!");
    email.focus();
    return false;
  }
  if (phoneValue == "") {
    e.preventDefault();
    alert("please provide the phone number!");
    phone.focus();
    return false;
  }
  if (phoneValue.length < 10 || phoneValue.length > 10) {
    e.preventDefault();
    alert("please provide the valid phone number");
    phone.focus();
    return false();
  }
  if (passwordValue == "") {
    e.preventDefault();
    alert("please provide the password!");
    password.focus();
    return false();
  }
  if (passwordValue.length < 8) {
    e.preventDefault();
    alert("password cant be less than 8 digits");
    password.focus();
    return false();
  }
});