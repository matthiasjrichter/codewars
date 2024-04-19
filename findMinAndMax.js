// https://www.codewars.com/kata/57a1ae8c7cb1f31e4e000130
//
// Implement a function that returns the minimal and the maximal value of a list (in this order).
//
// function getMinMax(arr){
//     //..
//   };

//sort()
function getMinMax(arr) {
  let sorted = arr.sort((a, b) => a - b);
  return [sorted[0], sorted[sorted.length - 1]];
}

//Math.min() and Math.max() with destructuring
const getMinMax = (arr) => [Math.min(...arr), Math.max(...arr)];

//tests
getMinMax([1]); //[1,1]);
getMinMax([1, 2]); //[2,1]);