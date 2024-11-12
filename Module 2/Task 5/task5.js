let numbers = [];

while (true) {
 let input = prompt('Enter a number:');
 let number = parseInt(input);

 if (numbers.includes(number)) {
   console.log(`The number ${number} already exists`);
   break;
 }

 numbers.push(number);

}

numbers.sort();

console.log("All entered numbers are in ascending order: ");
numbers.forEach(num => console.log(num))