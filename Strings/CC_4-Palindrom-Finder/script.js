// Write a program that returns true or false if the given word is palindrome or not. 
// A palindrome is a word or sentence that’s spelled the same way 
// both forward and backward, ignoring punctuation, case, and spacing.

const palindrome = word => {
    const reversed = word.split('').reverse().join('');
    if (reversed === word) {
        return true;
    }
    return false;
}