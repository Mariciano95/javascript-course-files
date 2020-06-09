// Write a JavaScript program containing a linkInfo() function that shows:
// The total number of links
// The target of the first and last links

const linkInfo = () => {
    const links = document.querySelectorAll('a');
    if (links.length > 0) {
        return `Total Links: ${links.length}, First link: ${links[0].href}, Last link: ${links[links.length - 1].href}`;
    }
    return 'Link Count is zero';
}

console.log(linkInfo());