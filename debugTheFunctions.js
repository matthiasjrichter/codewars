// https://www.codewars.com/kata/5844a422cbd2279a0c000281
//
// Debug the functions
// Should be easy, begin by looking at the code. Debug the code and the functions should work.
//
// There are three functions: Multiplication (x) Addition (+) and Reverse (!esreveR)
//
// function multi(arr) {
//   return arr * arr;
// }
// function add(arr) {
//   return arr + arr;
// }
// function reverse(str) {
//   return str.reverse();
// }

// Verbose and clear
function multi(arr) {
  return arr.reduce((product, current) => product * current, 1);
}
function add(arr) {
  return arr.reduce((sum, current) => sum + current, 0);
}
function reverse(str) {
  return str.split("").reverse().join("");
}

// Nice and compact, expecting valid input
const multi = arr => arr.reduce((a, c) => a * c);
const add = arr => arr.reduce((a, c) => a + c);
const reverse = str => [...str].reverse().join("");