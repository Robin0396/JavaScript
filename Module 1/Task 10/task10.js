'use strict'

function rollDice(sides = 6) {
    return Math.floor(Math.random() * sides) + 1;
}

function simulateDiceRolls(numDice, targetSum, numSimulations = 10000) {
    let successfulRolls = 0;

    for (let i = 0; i < numSimulations; i++) {
        let sum = 0;
        for (let j = 0; j < numDice; j++) {
            sum += rollDice();
        }

        if (sum === targetSum) {
            successfulRolls++;
        }
    }

    return (successfulRolls / numSimulations) * 100;
}

window.onload = function calculateProbability() {

    const numDice = parseInt(prompt("Enter the number of dice:"));
    const targetSum = parseInt(prompt("Enter the sum you're interested in:"));

    if (isNaN(numDice) || isNaN(targetSum) || numDice <= 0 || targetSum <= 0) {
        document.getElementById("result").textContent = "Please enter valid numbers for the dice and sum.";
        return;
    }

    const probability = simulateDiceRolls(numDice, targetSum).toFixed(2);

    document.getElementById("result").textContent = `Probability to get sum ${targetSum} with ${numDice} dice is ${probability}%.`;
}