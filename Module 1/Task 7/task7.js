
const numRolls = prompt('Enter the number of dice rolls');

let sum = 0;

for (let i = 0; i < numRolls; i++) {

  const roll = Math.floor(Math.random() * 6 ) + 1;
  sum += roll

  }

console.log(`Number of dice rolls: ${sum}`)
