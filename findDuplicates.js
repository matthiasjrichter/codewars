// https://www.codewars.com/kata/5558cc216a7a231ac9000022
//
// Given an array, find the duplicates in that array, and return a new array of those duplicates. The elements of the returned array should appear in the order when they first appeared as duplicates.
//
// Note: numbers and their corresponding string representations should not be treated as duplicates (i.e., "1" != 1).
//
// Examples
// [1, 2, 4, 4, 3, 3, 1, 5, 3, "5"]  ==>  [4, 3, 1]
// [0, 1, 2, 3, 4, 5]                ==>  []
//
// function duplicates(arr) {
//   //TODO: return the array of duplicates from arr
// }

function duplicates(arr) {
  let seen = [];
  let result = [];
  arr.forEach((e) => {
    if (!seen.includes(e)) seen.push(e);
    else if (!result.includes(e)) result.push(e);
  });
  return result;
}

// frequency map for less time complexity ((0(n))
function duplicates(arr) {
  let seen = new Map();
  let result = [];
  for (let e of arr) {
    let count = seen.get(e) || 0;
    seen.set(e, count + 1);
    if (count === 1) result.push(e);
  }
  return result;
}
