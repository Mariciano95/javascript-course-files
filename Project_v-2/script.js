// // Initial links array
// const links = [];

// // Dynamic content will go here
// const content = document.getElementById('content');

// console.log('it works')

// class Link {
//     constructor(title, url, author) {
//         let absouluteUrl = url;
//         // Check if url starts with "http://" or "https://"
//         if (
//             !absouluteUrl.startsWith('http://') &&
//             !absouluteUrl.startsWith('https://')
//         ) {
//             // If not, add 'http://' at the beginning
//             absouluteUrl = `http://${absouluteUrl}`;
//         }

//         // Add data properties
//         this.title = title;
//         this.author = author;
//         this.url = absouluteUrl;
//     }

//     // Describe the link as a string
//     toString() {
//         return `${this.title} (${this.url}). Author: ${this.author}`;
//     }
// }

// links.push(new Link("Hacker News", "https://news.ycombinator.com", "Baptiste"));
// links.push(new Link("Reddit", "https://reddit.com", "Thomas"));
// links.push(new Link("Boing Boing", "boingboing.net", "Daniel"));
// const linksWrapper = document.createElement('div');
// linksWrapper.id = "linksWrapper";

// const showAllLinks = () => {
//     linksWrapper.innerHTML = '';
//     links.forEach(link => {
//         // Link - main div tag
//         const linkDiv = document.createElement('div');
//         const linkTitle = document.createElement('a');
//         const linkUrl = document.createElement('span');
//         const linkHeadline = document.createElement('h4');
//         const linkAuthor = document.createElement('span');

//         linkDiv.classList.add('link');

//         // Add content and class to the link title
//         linkTitle.textContent = link.title;
//         linkTitle.url = link.url;
//         linkTitle.setAttribute('url', link.url);
//         linkTitle.classList.add('linkTitle');

//         // Add content and class to the link url
//         linkUrl.textContent = link.url;
//         linkUrl.classList.add('linkUrl');

//         // Add content and class to the link url
//         linkHeadline.appendChild(linkTitle);
//         linkHeadline.appendChild(linkUrl);

//         // Add content to the link author
//         linkAuthor.textContent = `Submitted by ${link.author}`;

//         // Append link headline and link author to the main div
//         linkDiv.appendChild(linkHeadline);
//         linkDiv.appendChild(linkAuthor);

//         // Append ever link to the dynamic content div
//         linksWrapper.appendChild(linkDiv);
//     });
//     content.appendChild(linksWrapper);
// }

// showAllLinks();

// const submitButton = document.getElementById('submitButton');
// const linkForm = document.querySelector('.linkForm');
// submitButton.addEventListener('click', () => {
//     linkForm.style.display = "block";
// });

// const nameInput = document.querySelector('#nameInput');
// const linkNameInput = document.querySelector('#linkNameInput');
// const urlInput = document.querySelector('#urlInput');
// const addButton = document.querySelector('#addLink');
// const success = document.createElement('div');
// success.classList.add('success');

// addButton.addEventListener('click', () => {
//     if (
//         nameInput.value !== '' &&
//         linkNameInput.value !== '' &&
//         urlInput.value !== ''
//     ) {
//         links.unshift(new Link(linkNameInput.value, urlInput.value, nameInput.value));
//         showAllLinks();
//         const title = linkNameInput.value;
//         nameInput.value = '';
//         linkNameInput.value = '';
//         urlInput.value = '';
//         linkForm.style.display = "none";
//         success.textContent = `The link ${title} has been succesfully added!`;
//         content.prepend(success);
//         setTimeout(() => {
//             console.log(document.querySelector('success'));
//             document.querySelector('.success').remove();
//         }, 3000)
//     }
// });


// Course solution
class Link {
    constructor(title, url, author) {
        let absouluteUrl = url;
        // Check if url starts with "http://" or "https://"
        if (
            !absouluteUrl.startsWith('http://') &&
            !absouluteUrl.startsWith('https://')
        ) {
            // If not, add 'http://' at the beginning
            absouluteUrl = `http://${absouluteUrl}`;
        }

        // Add data properties
        this.title = title;
        this.author = author;
        this.url = absouluteUrl;
    }

    // Describe the link as a string
    toString() {
        return `${this.title} (${this.url}). Author: ${this.author}`;
    }
}

const contentElement = document.getElementById('content');

// Create and return a DOM element showing a link
const createLinkElement = link => {
    // Create DOM element for link title
    const titleElement = document.createElement('a');
    titleElement.href = link.url;
    titleElement.classList.add('linkTitle');
    titleElement.appendChild(document.createTextNode(link.title));

    // Create DOM element for link URL
    const urlElement = document.createElement('span');
    urlElement.classList.add('linkUrl');
    urlElement.appendChild(document.createTextNode(link.url));

    // Create DOM element for link headline, containing title & URL
    const headlineElement = document.createElement('h4');
    headlineElement.classList.add('linkHeadline');
    headlineElement.appendChild(titleElement);
    headlineElement.appendChild(urlElement);

    // Create DOM element for link author
    const authorElement = document.createElement('span');
    authorElement.classList.add('linkAuthor');
    authorElement.appendChild(
        document.createTextNode(`Submitted by ${link.author}`)
    );

    // Create DOM element for link
    const linkElement = document.createElement('div');
    linkElement.classList.add('link');
    linkElement.appendChild(headlineElement);
    linkElement.appendChild(authorElement);

    return linkElement;
}

// Create and return a DOM input element
// Parameters are name, placeholder text and input size
const createInputElement = (name, placeholder, size) => {
    const inputElement = document.createElement('input');
    inputElement.type = 'text';
    inputElement.setAttribute('name', name);
    inputElement.setAttribute('placeholder', placeholder);
    inputElement.setAttribute('size', size);
    inputElement.setAttribute('required', 'true');
    inputElement.classList.add('form-control');
    return inputElement;
};

// Create and return a form for submitting a new link
const createLinkForm = () => {
    // Create input fields for link properties
    const authorElement = createInputElement('author', 'Enter author', 20);
    const titleElement = createInputElement('title', 'Enter link title', 40);
    const urlElement = createInputElement('url', 'Enter link URL', 40);

    // Create submit button
    const submitElement = document.createElement('input');
    submitElement.type = 'submit';
    submitElement.value = 'Add link';
    submitElement.classList.add('btn');
    submitElement.classList.add('btn-primary');

    // Create link submission form
    const linkFormElement = document.createElement('form');
    linkFormElement.classList.add('linkForm');
    linkFormElement.classList.add('form-inline');
    linkFormElement.appendChild(authorElement);
    linkFormElement.appendChild(titleElement);
    linkFormElement.appendChild(urlElement);
    linkFormElement.appendChild(submitElement);

    // Handle form submission
    linkFormElement.addEventListener('submit', e => {
        // Cancle default form behavior
        e.preventDefault();

        // Create new link to page, replacing form
        const newLink = new Link(
            titleElement.value,
            urlElement.value,
            authorElement.value
        );

        // Add new link to page, replacing form
        const newLinkElement = createLinkElement(newLink);
        contentElement.replaceChild(newLinkElement, e.target);

        // Create info message indicating success
        const infoElement = document.createElement('div');
        infoElement.classList.add('alert');
        infoElement.classList.add('alert-success');
        infoElement.textContent = `The link ${newLink.title} has been succesfully added!`;
        contentElement.insertBefore(infoElement, newLinkElement);
        // Remove info message after 2 seconds
        setTimeout(() => {
            contentElement.removeChild(infoElement);
        }, 2000);
    });

    return linkFormElement;
};

// Intial links array
const links = [];
links.push(new Link("Hacker News", "https://news.ycombinator.com", "Baptiste"));
links.push(new Link("Reddit", "https://reddit.com", "Thomas"));
links.push(new Link("Boing Boing", "boingboing.net", "Daniel"));

// Add each link to page
links.forEach(link => {
    const linkElement = createLinkElement(link);
    contentElement.appendChild(linkElement);
});

// Handle click on link submit button
document.getElementById('submitButton').addEventListener('click', () => {
    // Create link submission form
    const formElement = createLinkElement();
    // Add form on page before first link
    contentElement.insertBefore(formElement, document.querySelector('.link'));
});