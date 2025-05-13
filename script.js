// Select form and input fields
const form = document.getElementById("registrationForm");
const nameInput = document.getElementById("fullname");
const emailInput = document.getElementById("email");
const phoneInput = document.getElementById("phone");
const passwordInput = document.getElementById("password");
const confirmPasswordInput = document.getElementById("confirmPassword");

// Error elements
const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const phoneError = document.getElementById("phoneError");
const passwordError = document.getElementById("passwordError");
const confirmPasswordError = document.getElementById("confirmPasswordError");

// Event Listener for form submission
form.addEventListener("submit", function (e) {
  e.preventDefault(); // Prevent form from submitting

  // Reset all error messages
  nameError.textContent = "";
  emailError.textContent = "";
  phoneError.textContent = "";
  passwordError.textContent = "";
  confirmPasswordError.textContent = "";

  let isValid = true;

  const name = nameInput.value.trim();
  const email = emailInput.value.trim();
  const phone = phoneInput.value.trim();
  const password = passwordInput.value;
  const confirmPassword = confirmPasswordInput.value;

  // Name Validation
  if (name.length < 5) {
    nameError.textContent = "Name must be at least 5 characters.";
    isValid = false;
  }

  // Email Validation
  if (!email.includes("@")) {
    emailError.textContent = "Enter a valid email with '@'.";
    isValid = false;
  }

  // Phone Validation
  if (phone.length !== 10 || phone === "1234567890" || isNaN(phone)) {
    phoneError.textContent = "Enter a valid 10-digit phone number.";
    isValid = false;
  }

  // Password Validation
  if (
    password.toLowerCase() === "password" ||
    password.toLowerCase() === name.toLowerCase() ||
    password.length < 8
  ) {
    passwordError.textContent =
      "Password must be strong and not 'password' or your name.";
    isValid = false;
  }

  // Confirm Password Validation
  if (confirmPassword !== password) {
    confirmPasswordError.textContent = "Passwords do not match.";
    isValid = false;
  }

  // If all inputs are valid, you can proceed
  if (isValid) {
    alert("Form submitted successfully!");
    form.reset();
  }
});
