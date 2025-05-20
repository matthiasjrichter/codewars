// https://www.codewars.com/kata/5a092d9e46d843b9db000064
//
// In this Kata, you will be given an array of integers whose elements have both a negative and a positive value, except for one integer that is either only negative or only positive. Your task will be to find that integer.
//
// Examples:
//
// [1, -1, 2, -2, 3] => 3
//
// 3 has no matching negative appearance
//
// [-3, 1, 2, 3, -1, -4, -2] => -4
//
// -4 has no matching positive appearance
//
// [1, -1, 2, -2, 3, 3] => 3
//
// (the only-positive or only-negative integer may appear more than once)
//
// Good luck!
//
// function solve(arr){
//     //..
// };

// for loop
function solve(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (!arr.includes(-arr[i])) return arr[i];
  }
}

// Set
function solve(arr) {
  let set = new Set(arr);
  for (let num of arr) {
    if (!set.has(-num)) return num;
  }
}

// filter()
const solve = (arr) => arr.filter((e) => !arr.includes(-e))[0];

// find()
const solve = (arr) => arr.find((e) => !arr.includes(-e));

// find() and Set
const solve = (arr) => {
  const set = new Set(arr);
  return arr.find((e) => !set.has(-e));
};

// Test
solve([-3, 1, 2, 3, -1, -4, -2]); // -4
