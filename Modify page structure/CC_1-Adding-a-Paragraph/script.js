// Improve the languages example to add a paragraph (<p> tag) containing a link (<a> tag) to the URL:
// https://en.wikipedia.org/wiki/List_of_programming_languages.
// The final output should look like this:

const a = '<a href="https://en.wikipedia.org/wiki/List_of_programming_languages" id="link">list</a>'
const p = document.createElement('p');
p.innerHTML = `Here is a more complete ${a} of languages`;
document.appendChild(p);

// Course solution
const paragraphElement = document.createElement('p');
const linkElement = document.createElement('a');
linkElement.id = 'link';
linkElement.href = 'https://en.wikipedia.org/wiki/List_of_programming_languages';
linkElement.textContent = 'list';
paragraphElement.appendChild(document.createTextNode('Here is a more complete '));
paragraphElement.appendChild(linkElement);
paragraphElement.appendChild(document.createTextNode(' of languages'));
document.getElementById('content').appendChild(paragraphElement);