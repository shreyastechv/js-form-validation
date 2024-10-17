function isStrEmpty(string) {
	if(string.trim().length == 0) {
		return true;
	}
	return false;
}

function validateFullname(fullname) {
	if(isStrEmpty(fullname)) {
		return false;
	}

	if(/\d/.test(fullname)) {
		return false;
	}

	return true;
}

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

function validatePassword(password) {
	let errorStr ="";

	// Checking for length
	if(password.length < 8) {
		errorStr += "<br>- more than 8 characters";
	}

	// Checking for lowercase letters
	if(password == password.toUpperCase()) {
		errorStr += "<br>- a lowercase letter";
	}

	// Checking for uppercase letters
	if(password == password.toLowerCase()) {
		errorStr += "<br>- an uppercase letter";
	}

	// Checking for numbers
	if(!/\d/.test(password)) {
		errorStr += "<br>- one digit";
	}

	// Check for special characters
	if(!/[@$!%*?&]/.test(password)) {
		errorStr += "<br>- one special character (@$!%*?&)";
	}

	return errorStr;
}

function validate() {
	const fullname = document.getElementById("fullname").value;
	const male = document.getElementById("male").checked;
	const female = document.getElementById("female").checked;
	const email = document.getElementById("email").value;
	const phone = document.getElementById("phone").value;
	const age = document.getElementById("age").value;
	const password = document.getElementById("password").value;
	const confirmPassword = document.getElementById("confirm-password").value;
	const date = new Date(document.getElementById("date").value);
	const website = document.getElementById("website").value
	const terms = document.getElementById("terms").checked;

	let errorFullname = document.getElementById("error-fullname");
	let errorGender = document.getElementById("error-gender");
	let errorEmail = document.getElementById("error-email");
	let errorPhone = document.getElementById("error-phone");
	let errorAge = document.getElementById("error-age");
	let errorPassword = document.getElementById("error-password");
	let errorConfirmPassword = document.getElementById("error-confirm-password");
	const errorDate = document.getElementById("error-date");
	const errorWebsite = document.getElementById("error-website");
	const errorTerms = document.getElementById("error-terms");

	errorFullname.textContent = "";
	errorGender.textContent = "";
	errorEmail.textContent = "";
	errorPhone.textContent = "";
	errorAge.textContent = "";
	errorPassword.textContent = "";
	errorConfirmPassword.textContent = "";
	errorDate.textContent = "";
	errorWebsite.textContent = "";
	errorTerms.textContent = "";

	// Name validation
	if(!validateFullname(fullname)) {
		errorFullname.textContent = "Not a valid name";
	}

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

	// Age validation
	if(age > 60 || age < 18) {
		errorAge.textContent = "Age should be between 18 and 60";
	}

	// Password validation
	const errorStr = validatePassword(password);
	if(errorStr != "") {
		errorPassword.innerHTML = "Password must contain atleast the following:" + errorStr;
	}
	else if(password !== confirmPassword) {
		errorConfirmPassword.textContent = "Passwords must be the same";
	}

	// Date validation
	const year = date.getFullYear();
	const month = date.getMonth()+1;
	const day = date.getDate();
	if((year<2006 || year>2025) || (year==2006 && (month<10 || (month==10 && day<17))) || (year==2025 && (month>10 || (month==10 && day>17)))) {
		errorDate.textContent = "Date must be between 2006-10-17 and 2025-10-17";
	}

	// Website url validation
	const urlPattern = /^(http:\/\/|https:\/\/)?(www\.)?[\w]+\.(com|org|net|io|us|uk|de|cn|xyz|site|online|co|be|fr|zip|ing)$/;
	if(!urlPattern.test(website)) {
		errorWebsite.textContent = "Url is invalid";
	}

	// Checkbox validation
	if(!terms) {
		errorTerms.textContent = "You need to accept the terms";
	}
}