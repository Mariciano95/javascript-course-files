// Write the JavaScript code that adds a new dessert to the list when the user
// clicks on the button. The dessert name is chosen by the user.

const addBtn = document.querySelector('#addButton');
const dessertList = document.querySelector('#desserts');

const addDesert = e => {
    let dessert = prompt('Enter the name of the dessert:');
    let li = document.createElement('li'); 
    li.textContent = dessert;
    li.setAttribute('contentEditable', true);
    dessertList.appendChild(li);
}

addBtn.addEventListener('click', addDesert);

// Course solution
document.querySelector('#addButton').addEventListener('click', () => {
    const dessertName = prompt('Enter the dessert name:');
    const dessertElement = document.createElement('li');
    dessertElement.textContent = dessertName;
    dessertElement.addEventListener('click', e => {
        const newName = prompt(`Update the name of dessert ${e.target.textContent}`);
        e.target.textContent = newName;
    });
    document.getElementById('desserts').appendChild(dessertElement);
});

