function even(numbers) {
  return numbers.filter(number => number % 2 ===0);
}

const originalArray = [2, 7, 4, 9, 3];

const evenArray = even(originalArray);

console.log("Original array:", originalArray)
console.log("Even number array:", evenArray)