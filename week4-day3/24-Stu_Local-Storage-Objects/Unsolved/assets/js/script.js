var firstNameInput = document.querySelector("#first-name");
var lastNameInput = document.querySelector("#last-name");
var emailInput = document.querySelector("#email");
var passwordInput = document.querySelector("#password");
var signUpButton = document.querySelector("#sign-up");

signUpButton.addEventListener("click", function (event) {
  event.preventDefault();

  // TODO: Create user object from submission
  var user = {
    name: firstNameInput.value,
    surname: lastNameInput.value,
    email: emailInput.value,
    password: passwordInput.value,
  };

  // TODO: Set new submission to local storage
  localStorage.setItem("user", JSON.stringify(user));
  renderMessage();
});

var userObject = localStorage.getItem("user");
