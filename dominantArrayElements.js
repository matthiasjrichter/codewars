// https://www.codewars.com/kata/5a04133e32b8b998dc000089
//
// An element in an array is dominant if it is greater than all elements to its right. You will be given an array and your task will be to return a list of all dominant elements. For example:
//
// solve([1,21,4,7,5]) = [21,7,5] because 21, 7 and 5 are greater than elments to their right.
// solve([5,4,3,2,1]) = [5,4,3,2,1]
//
// Notice that the last element is always included. All numbers will be greater than 0.
// More examples in the test cases.
//
// Good luck!
//
// function solve(arr) {
//   // TODO
// }

function solve(arr) {
  let res = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr.slice(i + 1).every((e) => arr[i] > e)) res.push(arr[i]);
  }
  return res;
}

// .filter()
const solve = arr => arr.filter((_, i) => arr.slice(i + 1).every((e) => arr[i] > e));