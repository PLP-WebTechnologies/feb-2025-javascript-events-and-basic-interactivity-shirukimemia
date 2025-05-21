// Responsive menu toggle
const menuToggle = document.getElementById('menu-toggle');
const menu = document.getElementById('menu');

menuToggle.addEventListener('click', () => {
    menu.classList.toggle('hidden');
});

// Simple form validation & submission feedback
const form = document.getElementById('contact-form');
const formMsg = document.getElementById('form-msg');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const email = form.email.value.trim();
    const message = form.message.value.trim();

    if (email === '' || message === '') {
        formMsg.style.color = 'red';
        formMsg.textContent = 'Please fill out all fields.';
        return;
    }

    // Simple email format check
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        formMsg.style.color = 'red';
        formMsg.textContent = 'Please enter a valid email address.';
        return;
    }

    formMsg.style.color = 'green';
    formMsg.textContent = 'Thank you for your message!';

    // Reset form fields
    form.reset();
});
