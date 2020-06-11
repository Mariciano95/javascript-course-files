const buttonElement = document.querySelector('button');
const counterElement = document.getElementById('counter');
// Gloval variable to access it from function
let intervalid = null;
// Chronometer state, initial stopped
let started = false;

buttonElement.addEventListener('click', () => {
    if (!started) {
        // Start the chronometer: add 1 to the counter each second
        intervalId = setInterval(() => {
            counterElement.textContent = String(Number(counterElement.textContent) + 1);
        }, 1000);
        // Update button text
        buttonElement.textContent = 'Stop';
    } else {
        // Stop the chronometer
        clearInterval(intervalId);
        // Update button text
        buttonElement.textContent = 'Start';
    }

    started = !started;
});