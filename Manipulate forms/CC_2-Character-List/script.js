//Complete-This-Code

// Character list. Each house has a name and a code
const houses = [
    {
        code: "ST",
        name: "Stark"
    },
    {
        code: "LA",
        name: "Lannister"
    },
    {
        code: "BA",
        name: "Baratheon"
    },
    {
        code: "TA",
        name: "Targaryen"
    }
];

// Return an array of characters belonging to a house
const getCharacters = houseCode => {
    switch (houseCode) {
        case "ST":
            return ["Eddard", "Catelyn", "Robb", "Sansa", "Arya", "Jon Snow"];
        case "LA":
            return ["Tywin", "Cersei", "Jaime", "Tyrion"];
        case "BA":
            return ["Robert", "Stannis", "Renly"];
        case "TA":
            return ["Aerys", "Daenerys", "Viserys"];
        default:
            return []; // Empty array
    }
};

const options = document.querySelector('#house');
houses.forEach(house => {
    let houseOpt = document.createElement('option');

    houseOpt.value = house.code;
    houseOpt.innerText = house.name;

    options.appendChild(houseOpt);
})

const characters = document.querySelector('#characters');

options.addEventListener('chage', e => {
    let listOfChars = getCharacters(e.target.value);
    characters.innerHTML = '';

    if (listOfChars.length > 0) {
        listOfChars.forEach(char => {
            let li = document.createElement('li');
            li.textContent = char;
            characters.appendChild(li);
        });
    }
});
