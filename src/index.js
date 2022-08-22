// challenge 1
function buttonAlert() {
  alert(`Hooray!`);
}

let button1 = document.querySelector("#special-button");
button1.addEventListener("click", buttonAlert);

// challenge 2

function showPassword(event) {
  event.preventDefault();
  if (PW.value == "") {
    alert(`Please enter a password!`);
  } else {
    alert(`Your password is ${PW.value}!`);
  }
}

let PW = document.querySelector("#password-input");
let button2 = document.querySelector("#password-submit-button");
button2.addEventListener("click", showPassword);

// challenge 3
function challenge3(event) {
  event.preventDefault();
  alert(`Your email is ${email.value}`);
  alert(`Your username is ${username.value}`);
}

let email = document.querySelector("#email-input");
let username = document.querySelector("#username-input");

let button3 = document.querySelector("#submit3");
button3.addEventListener("click", challenge3);

// email - input;
// username - input;
