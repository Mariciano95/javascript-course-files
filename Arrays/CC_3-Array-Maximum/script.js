// Write a program that creates an array of following elements, 
// then returns the maximum element in the array.
const values = [3, 11, 7, 2, 9, 10];

const maxElement = values => {
    let max = values[0];
    for (let i = 0; i < values.length; i++) {
        if (max < values[i]) {
            max = values[i];
        }
    }
    return max;
}

console.log(maxElement(values));