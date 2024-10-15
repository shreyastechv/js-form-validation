function validateEmail(email) {
	const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	if(!emailPattern.test(email)) {
		return false;
	}
	return true;
}

function validatePhoneNum(phone) {
	if(phone.length != 10) {
		return false;
	}
	return true;
}

function validate() {
	console.log("Hi");
	const fullname = document.getElementById("fullname").value;
	const male = document.getElementById("male").checked;
	const female = document.getElementById("female").checked;
	const email = document.getElementById("email").value;
	const phone = document.getElementById("phone").value;
	const age = document.getElementById("age").value;
	const password = document.getElementById("password").value;
	const confirmPassword = document.getElementById("confirm-password").value;

	let errorFullname = document.getElementById("error-fullname");
	let errorGender = document.getElementById("error-gender");
	let errorEmail = document.getElementById("error-email");
	let errorPhone = document.getElementById("error-phone");
	let errorAge = document.getElementById("error-age");
	let errorPassword = document.getElementById("error-password");
	let errorConfirmPassword = document.getElementById("error-confirm-password");

	errorFullname.textContent = "";
	errorGender.textContent = "";
	errorEmail.textContent = "";
	errorPhone.textContent = "";
	errorAge.textContent = "";
	errorPassword.textContent = "";
	errorConfirmPassword.textContent = "";

	// Gender validation
	if(!male && !female) {
		errorGender.textContent = "Please select a gender";
	}

	// Email validation
	if(!validateEmail(email)) {
		errorEmail.textContent = "Not a valid email address";
	}

	// Phone number validation
	if(!validatePhoneNum(phone)) {
		errorPhone.textContent = "Not a valid phone number";
	}
}