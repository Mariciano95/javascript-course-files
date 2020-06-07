// Complete the following program to compute and return the total 
// sum of the values in each of the arrays.
const arrays = [[1, 4], [11], [3, 5, 7]];

const findSum = array => {
  return array.map(x => x.reduce((acc, x) => acc + x, 0)).reduce((acc, x) => acc + x ,0);
}