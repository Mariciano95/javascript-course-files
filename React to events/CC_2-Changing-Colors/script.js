// Write the associated JavaScript code that updates the background 
// color of all div tags according to the key 
// (R, Y, G or B) pressed by the user.

const paragraphs = document.querySelectorAll('div');

const changeColor = (color, elements) => {
    let elems = Array.from(elements);

    console.log(color);
    elems.forEach(el => {
        el.style.backgroundColor = color;
    });
}

const processEvent = e => {
    let char = String.fromCharCode(e.keyCode);

    switch(char) {
        case 'R':
            changeColor('red', paragraphs);
            break;
        case 'Y':
            changeColor('yellow', paragraphs);
            break;
        case 'G':
            changeColor('green', paragraphs);
            break;
        case 'B':
            changeColor('blue', paragraphs);
            break;
    }
}

document.addEventListener('keydown', processEvent);