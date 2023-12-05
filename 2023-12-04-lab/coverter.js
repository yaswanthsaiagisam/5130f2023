const signupForm = document.getElementById('signup-form');
const loginForm = document.getElementById('login-form');
const guestForm = document.getElementById('guest-form');

signupForm.addEventListener('submit', function(event) {
  event.preventDefault();
  // Your logic for signup form submission goes here
  console.log('Sign Up form submitted');
  // Example: Send data to server, handle response, etc.
});

loginForm.addEventListener('submit', function(event) {
  event.preventDefault();
  // Your logic for login form submission goes here
  console.log('Login form submitted');
  // Example: Send data to server, handle response, etc.
});

guestForm.addEventListener('submit', function(event) {
  event.preventDefault();
  // Your logic for guest form submission goes here
  console.log('Guest form submitted');
  // Example: Send data to server, handle response, etc.
});