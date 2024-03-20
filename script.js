const loginForm = document.getElementById('loginForm');
const messageElement = document.getElementById('message');

loginForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === 'Web_Dev' && password === 'wb') {
        messageElement.textContent = 'Login successful!';
        messageElement.style.color = 'green';
    } else {
        messageElement.textContent = 'Login unsuccessful. Please try again.';
        messageElement.style.color = 'red';
    }
});