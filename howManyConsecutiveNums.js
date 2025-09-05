// https://www.codewars.com/kata/559cc2d2b802a5c94700000c
//
// Write a function that takes an array of unique integers and returns the minimum number of integers needed to make the values of the array consecutive from the lowest number to the highest number.
//
// Example
// [4, 8, 6] --> 2
// Because 5 and 7 need to be added to have [4, 5, 6, 7, 8]
//
// [-1, -5] --> 3
// Because -2, -3, -4 need to be added to have [-5, -4, -3, -2, -1]
//
// [1] --> 0
// []  --> 0
//
// function consecutive(array) {
// //code me
//   return 0;
// }

function consecutive(array) {
  if (array.length < 2) return 0;
  let [start, end] = [Math.min(...array), Math.max(...array)];
  let stepsBetween = end - start - 1;
  let stepsBetweenPresent = array.length - 2;
  return stepsBetween - stepsBetweenPresent;
}

// More concise:
function consecutive(array) {
  if (array.length < 2) return 0;
  let [min, max] = [Math.min(...array), Math.max(...array)];
  return max - min - (array.length) + 1;
}

// Arrow function and ternary:
const consecutive = (arr) => arr.length ? Math.max(...arr) - Math.min(...arr) - arr.length + 1 : 0;