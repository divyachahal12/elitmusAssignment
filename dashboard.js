const urlParams = new URLSearchParams(window.location.search);
const name = urlParams.get('name');
const email = urlParams.get('email');

const nameElement = document.querySelector('#name');
const emailElement = document.querySelector('#email');

nameElement.textContent = name;
emailElement.textContent = email;
