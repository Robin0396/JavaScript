
const form = document.getElementById('source');
const target = document.getElementById('target');


form.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent the default form submission behavior


    const firstName = document.querySelector('input[name="firstname"]').value.trim();
    const lastName = document.querySelector('input[name="lastname"]').value.trim();


    if (firstName && lastName) {
        target.textContent = `Your name is ${firstName} ${lastName}`;
    } else {
        target.textContent = 'Please fill out both first name and last name.';
    }
});
