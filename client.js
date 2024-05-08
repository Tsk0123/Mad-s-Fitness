document.getElementById('signup-form').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent the form from submitting normally

  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  fetch('/signup', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ email: email, password: password })
  })
  .then(response => {
    if (response.ok) {
      // Redirect the user to the home page after successful sign-up
      window.location.href = '/home';
    } else {
      // Display error message if sign-up fails
      document.getElementById('error-message').innerText = 'Sign-up failed. Please try again.';
    }
  })
  .catch(error => {
    console.error('Error:', error);
  });
});
