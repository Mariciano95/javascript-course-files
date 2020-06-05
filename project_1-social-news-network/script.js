
const listOfLinks = [

];

class Link {
    constructor(title, URL, author) {
        this.title = title;
        this.URL = URL;
        this.author = author;
    }
}

const showLinks = (arr, callback) => {
    if (traverse(arr) === '') {
        alert('No links!');
    } else {
        alert(traverse(arr));
    }
    callback();
}

const addLink = (arr, callback) => {
    let title = prompt("Enter the name of the site:"),
        URL = prompt("Enter the URL:"),
        author = prompt("Enter the name of the author:");
    if (!URL.startsWith('https://')) {
        URL = 'https://' + URL;
    }
    arr.push(new Link(title, URL, author));
    callback();
}

const removeLink = (arr, callback) => {
    let index = prompt(`Enter the index of the link you want to delete (1 - ${arr.length}):`);
    arr.splice(index - 1, 1);
    callback();
}

function traverse(arrayOfObjects) {
    let reslut = '';
    for (let i = 0; i < arrayOfObjects.length; i++) {
        if (arrayOfObjects[i] instanceof Object) {
            for (let p in arrayOfObjects[i]) {
                reslut += i + 1 + ' ' + p + ': ' + arrayOfObjects[i][p] + ' ';
            }
            reslut += '\n';
        }
    }
    return reslut;
}


const processOptionResponse = () => {
    const option = prompt(`Choose an option:
1: Shows links
2: Add a link
3: Remove a ling
0: Quit`);
    if (option === '1') {
        showLinks(listOfLinks, processOptionResponse);
    } else if (option === '2') {
        addLink(listOfLinks, processOptionResponse);
    } else if (option === '3') {
        removeLink(listOfLinks, processOptionResponse);
    } else if (option === '0') {
        alert('Goodbye!');
    }
}

processOptionResponse();

/* Course solution */

