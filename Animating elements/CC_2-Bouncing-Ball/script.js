// The goal of this exercise is to make a basketball bounce across the screen. 
// You can download the ball image form here.
let pos = 0;
const ball = document.getElementById('ball');
let intialLeftValue = ball.offsetLeft;
ball.style.position = "absolute";
let left = true;
const moveBall = () => {
    if (ball.offsetLeft + ball.offsetWidth >= window.innerWidth) {
        left = false;
    } else if (ball.offsetLeft <= intialLeftValue) {
        left = true;
    }
    console.log(ball.offsetLeft)

    if (left) {
        pos += 5;
        ball.style.left = pos + 'px';
    } else {
        pos -= 5;
        ball.style.left = pos + 'px';
    }
};

let animInterval;
const stopBall = e => {
    clearInterval(animInterval);
    e.target.disabled = true;
};

const startButton = document.querySelector('#start');
const stopButton = document.querySelector('#stop');

startButton.addEventListener('click', () => {
    clearInterval(animInterval);
    animInterval = setInterval(moveBall, 10);
    stopButton.disabled = false;
});

stopButton.addEventListener('click', stopBall);


/* Course solution */
const frameElement = document.getElementById('frame');
const ballElement = document.getElementById('ball');
// Movement value in pixels;
const movement = 7;
// Convert ball diameter (value of the form "XXpx") to a number
const ballDiameter = parseFloat(getComputedStyle(ballElement).width);
// Animation ID - Global variable to access it from functions
let animationId = null;
// Minimal left position (left border)
const xMin = 0;
// Direction info - 1=right, 2=left
let direction = 1;

// Moves the ballElement left or right
const animateBall = () => {
    // Converte the left position of the ball (value of the form "XXpx") to a number
    const xBall = parseFloat(getComputedStyle(ballElement).left);
    // Convert the width of the frame (value of the form "XXpx") to a number
    const xMax = parseFloat(getComputedStyle(frameElement).width);
    // If the ball is at an edge of the frame
    if (xBall + ballDiameter > xMax || xBall < xMin) {
        // Change direction
        direction *= -1;
    }
    // Move the ball in current direction
    ballElement.style.left = `${xBall + movement * direction}px`;
    // Request another animation
    animationId = requestAnimationFrame(animateBall);
}

const startButton = document.getElementById('start');
const stopButton = document.getElementById('stop');

startButton.addEventListener('click', () => {
    // Change button states
    startButton.disabled = true;
    stopButton.disabled = false;
    // Start the animation
    animationId = requestAnimationFrame(animateBall);
});

stopButton.addEventListener('click', () => {
    // Change button states
    startButton.disabled = false;
    stopButton.disabled = true;
    // Stop the animation
    cancelAnimationFrame(animateBall);
});