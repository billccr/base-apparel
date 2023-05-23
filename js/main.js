// get the form, email, & input
// input box, as well as the span element into which we will place the error message.
const form = document.querySelector("form");
const email = document.getElementById("emailaddress");
const emailError = document.querySelector("span.error");

email.addEventListener("input", (event) => {
  // Each time the user types something, we check if the
  // form fields are valid.

  if (email.validity.valid) {
    // if an error message is visible, but field
    // is valid, remove error message.
    emailError.textContent = ""; // clear content of message
    emailError.className = "error"; // reset visual state of message
  } else {
    // If there is still an error, show the correct error
    showError();
  }
});

form.addEventListener("submit", (event) => {
  // if the email field is valid, let the form submit
  if (!email.validity.valid) {
    // if not valid, display appropriate error message
    showError();
    // prevent form from being sent by canceling the event
    event.preventDefault();
  }
});

function showError() {
  if (email.validity.valueMissing) {
    // If the field is empty,
    emailError.textContent = "Please provide a valid email";
  } else if (email.validity.typeMismatch) {
    // If the field doesn't contain an email address
    emailError.textContent = "Please provide a valid email";
  } //else if (email.validity.tooShort) {
    // If the data is too short,
    // display the following error message.
  // emailError.textContent = `Email should be at least ${email.minLength} characters; you entered ${email.value.length}.`;
  //}

  // Set the styling appropriately
  emailError.className = "error active";
}
