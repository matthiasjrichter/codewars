// https://www.codewars.com/kata/59b710ed70a3b7dd8f000027
//
// A non-empty array a of length n is called an array of all possibilities if it contains all numbers between 0 and a.length - 1 (both inclusive).
//
// Write a function that accepts an integer array and returns true if the array is an array of all possibilities, else false.
//
// Examples:
//
// [1,2,0,3] => True
// # Includes all numbers between 0 and a.length - 1 (4 - 1 = 3)
//
// [0,1,2,2,3] => False
// # Doesn't include all numbers between 0 and a.length - 1 (5 - 1 = 4)
//
// [0] => True
// # Includes all numbers between 0 and a.length - 1 (1 - 1 = 0).
//
// function isAllPossibilities(x){
//   false
// }

function isAllPossibilities(x) {
  let nums = Array.from({ length: x.length }, (_, i) => i);
  return nums.every((n) => x.includes(n));
}

// One liner
const isAllPossibilities = (x) => Array.from({ length: x.length }, (_, i) => i).every((n) => x.includes(n));

// Set for beter performance
function isAllPossibilities(x) {
  let set = new Set(x);
  return [...Array(x.length).keys()].every(n => set.has(n));
}
