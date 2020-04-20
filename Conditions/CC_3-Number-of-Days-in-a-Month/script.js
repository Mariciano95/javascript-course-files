let month = parseInt(prompt("Enter month number:"));

if (month === 1 || month === 3 || month === 5 || 
    month === 7 || month === 8 || month === 10 || month === 12) {
        console.log("31");
} else if (month === 4 || month === 6 || month === 9 || month === 11) {
    console.log("30");
} else if (month === 2) {
    console.log("28, 29 in leap years");
} else {
    console.log("Enter a number from 1 - 12");
}

switch (month) {
    case 1: 
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
        console.log("31");
        break;
    case 4:
    case 6:
    case 9:
    case 11:
        console.log("30");
        break;
    case 2: 
        console.log("28, 29 in leap years");
        break;
    default:
        console.log("Enter a number from 1 - 12");
        break;
}