let rawPrice = parseInt(prompt("Enter raw price: "));

let VATRate = rawPrice *  (20.6 / 100);

console.log(`Final price: ${rawPrice + VATRate}`);