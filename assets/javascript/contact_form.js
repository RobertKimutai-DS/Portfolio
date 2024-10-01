// Validate the contact form before submission
function validateForm() {
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  // Basic email validation pattern
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Validate name field
  if (!name) {
    alert("Please enter your name.");
    return false;
  }

  // Validate email field
  if (!email || !emailPattern.test(email)) {
    alert("Please enter a valid email address.");
    return false;
  }

  // Validate message field
  if (!message) {
    alert("Please enter a message.");
    return false;
  }

  // Success - form is valid
  return true;
}

// Add real-time feedback for inputs
document.getElementById('name').addEventListener('input', function () {
  this.style.borderColor = this.value.trim() === '' ? 'red' : '#ccc';
});

document.getElementById('email').addEventListener('input', function () {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  this.style.borderColor = !emailPattern.test(this.value.trim()) ? 'red' : '#ccc';
});

document.getElementById('message').addEventListener('input', function () {
  this.style.borderColor = this.value.trim() === '' ? 'red' : '#ccc';
});
