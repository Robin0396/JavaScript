
let numbers = [];


for (let i = 0; i < 5; i++) {
    let number = parseFloat(prompt("Enter five numbers:"));
    if (!isNaN(number)) {
        numbers.push(number);
    } else {
        console.log("Invalid input, please enter a number.");
    }
}

console.log("Numbers in reverse order:");
for (let i = numbers.length - 1; i >= 0; i--) {
    console.log(numbers[i]);
}
