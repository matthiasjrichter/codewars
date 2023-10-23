// https://www.codewars.com/kata/5886c6b2f3b6ae33dd0000be
// Task
// Reversing an array can be a tough task, especially for a novice programmer. Mary just started coding, so she would like to start with something basic at first. Instead of reversing the array entirely, she wants to swap just its first and last elements.
//
// Given an array arr, swap its first and last elements and return the resulting array.
//
// Example
// For arr = [1, 2, 3, 4, 5], the output should be [5, 2, 3, 4, 1]
//
// Input/Output
// [input] integer array arr
//
// Constraints: 0 ≤ arr.length ≤ 50,  -1000 ≤ arr[i] ≤ 1000
//
// [output] an integer array
//
// Array arr with its first and its last elements swapped.
//
// function firstReverseTry(arr) {
//   //coding and coding..
//
//
// }

function firstReverseTry(arr) {
  if (arr.length < 2) return arr;

  let result = arr.slice(1, arr.length - 1);
  result.unshift(arr[arr.length - 1]);
  result.push(arr[0]);
  return result;
}
firstReverseTry([1, 2, 3, 4, 5]); // [5, 2, 3, 4, 1]


//alternative
function firstReverseTry(arr) {
  if (arr.length < 2) return arr;

  let first = arr[0];
  let last = arr[arr.length - 1];

  arr[0] = last;
  arr[arr.length - 1] = first;

  return arr;
}
firstReverseTry([1, 2, 3, 4, 5]); // [5, 2, 3, 4, 1]
