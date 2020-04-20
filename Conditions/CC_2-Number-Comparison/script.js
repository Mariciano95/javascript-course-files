let firstNumber = parseInt(prompt("Enter first number: ")),
    secondNumber = parseInt(prompt("Enter second number: "));

if (firstNumber > secondNumber) {
    console.log(`${firstNumber} is greater than ${secondNumber}`);
} else if (firstNumber < secondNumber) {
    console.log(`${firstNumber} is less than ${secondNumber}`);
} else {
    console.log(`${firstNumber} is equal to ${secondNumber}`);
}