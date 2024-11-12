let numbers = [];

while (true) {
  let input = prompt('Enter a number or enter 0 to stop:');
  let number = parseInt(input);

  if (number === 0) {
    break;
  }
  numbers.push(number);
}

numbers.sort((a, b) => b - a );

console.log('Numbers are in descending order:');
numbers.forEach(num => console.log(num));
