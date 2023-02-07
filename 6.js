const signInForm = document.querySelector(".container:first-of-type form");
const signUpForm = document.querySelector(".container:last-of-type form");

signInForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const email = signInForm.querySelector("#email").value;
  const password = signInForm.querySelector("#password").value;

  if (!email) {
    alert("Email is required");
    return;
  }

  if (!password) {
    alert("Password is required");
    return;
  }


});

signUpForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const name = signUpForm.querySelector("#name").value;
  const email = signUpForm.querySelector("#email").value;
  const password = signUpForm.querySelector("#password").value;

  if (!name) {
    alert("Name is required");
    return;
  }

  if (!email) {
    alert("Email is required");
    return;
  }

  if (!password) {
    alert("Password is required");
    return;
  }


});
