
const calculationInput = document.getElementById('calculation');
const calculateButton = document.getElementById('start');
const resultParagraph = document.getElementById('result');


calculateButton.addEventListener('click', () => {
    const input = calculationInput.value.trim(); // Get the user's input
    let result;

    try {

        if (input.includes('+')) {
            const [num1, num2] = input.split('+').map(Number);
            result = num1 + num2;
        } else if (input.includes('-')) {
            const [num1, num2] = input.split('-').map(Number);
            result = num1 - num2;
        } else if (input.includes('*')) {
            const [num1, num2] = input.split('*').map(Number);
            result = num1 * num2;
        } else if (input.includes('/')) {
            const [num1, num2] = input.split('/').map(Number);
            if (num2 === 0) {
                resultParagraph.textContent = 'Result: Division by zero is not allowed.';
                return;
            }
            result = Math.floor(num1 / num2); // Perform integer division
        } else {

            resultParagraph.textContent = 'Result: Invalid input. Please use +, -, *, or /.';
            return;
        }


        if (isNaN(result)) {
            resultParagraph.textContent = 'Result: Invalid numbers provided.';
            return;
        }


        resultParagraph.textContent = `Result: ${result}`;
    } catch (error) {

        resultParagraph.textContent = 'Result: An error occurred.';
        console.error(error);
    }
});
