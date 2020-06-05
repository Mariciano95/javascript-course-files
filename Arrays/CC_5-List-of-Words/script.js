// Create an object that contains following properties:
// list: array to store words
// addWord(word) : function to add given word in list array except the words ending with ing

// const words = {
//     list: [],
//     addWord(word) {
//         if (word.indexOf('ing') > -1) {
//             console.log('No words ending with ing!');
//         } else {
//             this.list.push(word);
//         }
//         return this.list;
//     }
// }

// course solution
const words = {
    list: [],
    addWord(word) {
        if (!word.endsWith('ing')) {
            this.list.push(word);
        }
    }
}