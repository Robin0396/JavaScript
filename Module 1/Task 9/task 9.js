'use strict';

const userInput = prompt("Enter an integer:");
const number = Number(userInput);
const resultElement = document.getElementById('result');

function isPrime(num) {
  if (num <= 1) return false;
  if (num === 2) return true;

  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}
let num;
if (isNaN(number) || !Number.isInteger(number)) {
  resultElement.textContent = "Please enter a valid integer.";
}
else if (isPrime(number)) {
  resultElement.textContent =` ${number} is a prime number.`;
}
else {
  resultElement.textContent =`${number} is not a prime number.`;
}
