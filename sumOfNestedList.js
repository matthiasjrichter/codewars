// https://www.codewars.com/kata/5a15a4db06d5b6d33c000018
// 
// Implement a function to calculate the sum of the numerical values in a nested list. For example :
// 
// sumNested([1, [2, [3, [4]]]]) => 10
// 
// const sumNested = arr => {
//   //
// };

const sumNested = arr => arr.flat(Infinity).reduce((a, c) => a + c, 0);