/*
Carousel
Write a program that launches a carousel for 10 turns, showing the turn number each time.
*/

// While loop solution
let length = parseInt(prompt("Enter the number of turns:"));
let i = 1;
while (i <= length) {
    console.log(`Turn number: ${i}`);
    i++;
}

// For loop soultion
for (let i = 1; i <= length; i++) {
    console.log(`Turn number: ${i}`);
}