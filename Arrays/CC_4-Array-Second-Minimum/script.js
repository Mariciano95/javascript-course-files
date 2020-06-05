// Write a program that creates an array of following elements, 
// then returns the second minimum element.
const values = [3, 11, 7, 2, 9, 10];

// const secondMinumum = values => {
//     values.sort((a, b) => a - b);
//     return values[1];
// }

// course solution

const secondMinumum = values => {
    let min = values[0];
    let sndMin = values[0];
    for (let value of values) {
        if (value < min) {
            sndMin = min;
            min = value;
        } else if (value < sndMin) {
            sndMin = value;
        }
    }
    return sndMin;
}
secondMinumum(values);