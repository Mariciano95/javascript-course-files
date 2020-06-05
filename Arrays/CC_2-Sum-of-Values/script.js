// Write a program that calculates the sum of all the elements present in it. 
// Your function should also handle negative values.

const sumArray = values => {
    let sum = 0;
    for (let i = 0; i < values.length; i++) {
        sum += values[i];
    }
    return sum;
}