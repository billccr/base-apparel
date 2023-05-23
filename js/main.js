const form = document.querySelector("form");
const email = document.getElementById("emailaddress");
const emailError = document.querySelector("span.error");

email.addEventListener("input", (event) => {
  // check each time the user types something

  if (email.validity.valid) {
    // if error message is visible but entry is valid, remove error message.
    emailError.textContent = ""; 		// clear content of message
    emailError.className = "error"; 	// reset visual state of message
  } else {
    // if still an error, display the correct error
    showError();
  }
});

form.addEventListener("submit", (event) => {
  // if email field is valid, let the form submit
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
