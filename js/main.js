const form = document.querySelector("form");
const email = document.getElementById("emailaddress");
const emailError = document.querySelector("span.error");

email.addEventListener("input", (event) => {
	if (email.validity.valid) {
		// if error message is visible but entry is valid, remove error message
		emailError.textContent = "";
		emailError.className = "error"; // reset visual state of message
	} else {
		showError();
	}
});

form.addEventListener("submit", (event) => {
	if (!email.validity.valid) {
		showError();
		// prevent form from being sent by canceling event
		event.preventDefault();
	}
});

function showError() {
	if (email.validity.valueMissing) {
		emailError.textContent = "Please provide a valid email";
	} else if (email.validity.typeMismatch) {
		emailError.textContent = "Please provide a valid email";
	}

	emailError.className = "error active";
}
