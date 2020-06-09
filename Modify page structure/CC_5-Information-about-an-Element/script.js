// Write a program that adds to the page a list showing the height and width 
// of the element identified by “content”.
const element = document.getElementById('content');

let width = element.offsetWidth;
let height = element.offsetHeight;

const ul = document.createElement('ul');
const itemHeight = document.createElement('li');
const itemWidth = document.createElement('li');

itemHeight.textContent = `Height: ${height}px`;
itemWidth.textContent = `Width: ${width}px`;

ul.appendChild(itemHeight);
ul.appendChild(itemWidth);
