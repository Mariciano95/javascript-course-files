// Start with the following HTML content and write the JavaScript code that 
// counts the number of clicks on the myButton button by updating the clickCount 
// element. The deactivate button stops the counting.

const buttonIncreaseCount = document.querySelector('#myButton');
const clickCount = document.querySelector('#clickCOunt');
const deactButton = document.querySelector('#deactivate');
let numberOfClicks = 0;

const increaseCount = e => {
    numberOfClicks++;
    clickCount.textContent = numberOfClicks;
}

buttonIncreaseCount.addEventListener('click', increaseCount);
deactButton.addEventListener('click', e => {
    buttonIncreaseCount.disabled = true;
});