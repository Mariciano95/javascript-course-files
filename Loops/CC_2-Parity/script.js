let number = parseInt(prompt("Enter number:"));
for (let i = number; i < number+10; i++) {
    if (i % 2 !== 0) {
        console.log(`${i} is odd`);
    } else {
       console.log(`${i} is even`); 
    }
}