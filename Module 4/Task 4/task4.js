'use strict'
document.addEventListener('DOMContentLoaded', async () => {
    try {

        const response = await fetch('https://api.chucknorris.io/jokes/random');
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }


        const data = await response.json();


        console.log(data.value);
    } catch (error) {
        console.error('Error fetching joke:', error);
    }
});
