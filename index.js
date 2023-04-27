const form = document.querySelector('#myForm');
const startTestBtn = document.querySelector('#startTestBtn');
const requiredFields = document.querySelectorAll('[required]');

// Disable "Start Test" button on page load
startTestBtn.disabled = true;

// Check if all required fields are filled
function checkRequiredFields() {
  for (let i = 0; i < requiredFields.length; i++) {
    if (requiredFields[i].value.trim() === '') {
      return false;
    }
  }
  return true;
}

// Enable "Start Test" button if all required fields are filled
form.addEventListener('input', () => {
  if (checkRequiredFields()) {
    startTestBtn.disabled = false;
  } else {
    startTestBtn.disabled = true;
  }
});


form.addEventListener('submit', (event) => {
  event.preventDefault();

  const formData = new FormData(form);
  const url = 'https://94x835lc4f.execute-api.eu-north-1.amazonaws.com/1'; // AWS Api server URL

  fetch(url, {
    method: 'POST',
    body: formData
  })
  .then(response => response.json())
  .then(data => {
    // Redirect to the other webpage and pass the server data as a query parameter
    window.location.href = `dashboard.html`;
  })
  .catch(error => console.error(error));
});
