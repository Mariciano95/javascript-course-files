// Write a program that returns the total number of vowels in a word.

const vowels = word => {
    let counter = 0;
    for (let i = 0; i < word.length; i++) {
        if (word[i].match(/^[aeiou]$/i)) {
            counter++;
        }
    }
    return counter;
};