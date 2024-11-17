
const num1 = document.getElementById('num1');
const num2 = document.getElementById('num2');
const operation = document.getElementById('operation');
const calculateButton = document.getElementById('start');
const resultElement = document.getElementById('result');


calculateButton.addEventListener('click', () => {

    const number1 = parseInt(num1.value);
    const number2 = parseInt(num2.value);


    if (isNaN(number1) || isNaN(number2)) {
        resultElement.textContent = 'Error: Please enter valid integers.';
        return;
    }

    let result;


    switch (operation.value) {
        case 'add':
            result = number1 + number2;
            break;
        case 'sub':
            result = number1 - number2;
            break;
        case 'multi':
            result = number1 * number2;
            break;
        case 'div':
            if (number2 === 0) {
                resultElement.textContent = 'Error: Division by zero is not allowed.';
                return;
            }
            result = Math.floor(number1 / number2); // Integer division
            break;
        default:
            resultElement.textContent = 'Error: Invalid operation.';
            return;
    }


    resultElement.textContent = `Result: ${result}`;
});
