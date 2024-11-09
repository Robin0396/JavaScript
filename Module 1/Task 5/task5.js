
const year = prompt('Enter a year');

let leap = 'is not';

console.log(year % 4);

if (year % 4 === 0) {
  leap = 'is';
}

const result = `Year ${year} ${leap} a leap year`;

console.log(result)