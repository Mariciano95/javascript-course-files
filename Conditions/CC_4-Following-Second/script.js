let hours = parseInt(prompt("Enter the hours:")),
    minutes = parseInt(prompt("Enter the minutes:")),
    seconds = parseInt(prompt("Enter the seconds:"));

if ((hours >= 0 && hours <= 23) &&
    (minutes >= 0 && minutes <= 59) &
    (seconds >= 0 && seconds <= 59)) {
    seconds++;
    if (seconds === 60) {
        seconds = 0;
        minutes++;
        if (minutes === 60) {
            minutes = 0;
            hours++;
            if (hours === 24) {
                hours = 0;
            }
        }
    }
    console.log(`In a second, time will be ${hours} hours, ${minutes} minutes and ${seconds} seconds.`);
} else {
    console.log("Enter hours between 1 - 24, minutes and seconds between 0 - 59");
}

// Course solution
// We start by testing errors cases
if (hours >= 0 &&
    hours <= 23 &&
    minutes >= 0 &&
    minutes <= 59 &&
    seconds >= 0 &&
    seconds <= 59) {
    seconds++; // Increment the seconds
    if (seconds === 60) {
        // Next minute: seconds are reset to 0
        seconds = 0;
        minutes++;
        if (minutes === 60) {
            // Next hour: minutes are reset to 0
            minutes = 0;
            hours++;
            if (hours === 24) {
                // Next second is midnight
                hours = 0;
            }
        }
    }
    console.log(`In a second, time will be ${hours} hours, ${minutes} minutes and ${seconds} seconds.`);
} else {
    console.log("Incorrect hour!");
}