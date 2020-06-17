
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
// Represent a link
class Link {
    constructor(title, url, author) {
        let absoluteUrl = url;
        // Check if url starts with "http://" or "https://"
        if (
            !absoluteUrl.startsWith("http://") &&
            !absoluteUrl.startsWith("https://")
        ) {
            // If not, add "http://" at the beginning
            absoluteUrl = `http://${absoluteUrl}`;
        }

        // Add data properties
        this.title = title;
        this.author = author;
        this.url = absoluteUrl;
    }

    // Describe the link as a string
    toString() {
        return `${this.title} (${this.url}). Author: ${this.author}`;
    }
}

// Initial links array
const links = [];
links.push(new Link("Hacker News", "https://news.ycombinator.com", "Baptiste"));
links.push(new Link("Reddit", "https://reddit.com", "Thomas"));
links.push(new Link("Boing Boing", "boingboing.net", "Daniel"));

let choice;
// Main program loop
// Display options until the user chooses to quit
while (choice !== "0") {

    switch (choice) {
        case "1": {
            if (links.length > 0) {
                // Show each link in an alert window
                for (let i = 0; i < links.length; i++) {
                    alert(`${i + 1}: ${links[i].toString()}`);
                }
            } else {
                alert("No links to display!");
            }
            break;
        }
        case "2": {
            // Input link properties
            const title = prompt("Enter the link title:");
            const url = prompt("Enter the link url:");
            const author = prompt("Enter the link author:");
            // Add new link to array
            links.push(new Link(title, url, author));
            break;
        }
        case "3": {
            if (links.length > 0) {
                // Input link index (must be between 1 and the number of links)
                let index = -1;
                const maxIndex = links.length;
                while (index < 1 || index > links.length) {
                    index = Number(
                        prompt(`Enter the index of the link to be removed (between 1 and ${maxIndex}):`)
                    );
                }
                // Remove selected link from array
                links.splice(index - 1, 1);
            } else {
                alert("No links to remove!");
            }
            break;
        }
    }
}
alert("See you later!");