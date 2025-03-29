let form = document.querySelector(".form");
let emailInput = document.querySelector(".email");

form.addEventListener("submit", handleSubmit);
form.addEventListener("input", handleInput);

function handleInput(event) {
  let input = event.target;
  if (input.classList.contains("color--error")) {
    input.classList.remove("color--error");
  }
}

function handleSubmit(event) {
  event.preventDefault();

  let { email } = Object.fromEntries(new FormData(this));
  let emailErrorMessage = validateEmail(email);
  updateError(emailErrorMessage, emailInput);
}

function validateEmail(value) {
  if (!value) return "Email cannot be empty";

  let isValidEmail = /[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$/;
  if (!isValidEmail.test(value)) return "Valid email required";
  return "";
}

function updateError(message, element) {
  element.nextElementSibling.textContent = message;

  if (message) {
    element.classList.add("email--error", "color--error");
  } else {
    form.submit();
  }
}