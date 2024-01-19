// https://www.codewars.com/kata/5a431c0de1ce0ec33a00000c/javascript
//
// Given an array of numbers, return a new array of length number containing the last even numbers from the original array (in the same order). The original array will be not empty and will contain at least "number" even numbers.
//
// For example:
//
// ([1, 2, 3, 4, 5, 6, 7, 8, 9], 3) => [4, 6, 8]
// ([-22, 5, 3, 11, 26, -6, -7, -8, -9, -8, 26], 2) => [-8, 26]
// ([6, -25, 3, 7, 5, 5, 7, -3, 23], 1) => [6]
//
// function evenNumbers(array, number) {
//   return []
// }

function evenNumbers(array, number) {
  let evenNums = array.filter((e) => e % 2 === 0);
  return evenNums.slice(-number);
}

//alternative
const evenNumbers = (array, number) => array.filter((e) => e % 2 === 0).slice(-number);

//for loop for fun
function evenNumbers(array, number) {
  let result = [];
  for (let i = array.length - 1; number > 0; i--) {
    if (array[i] % 2 === 0) {
      result.push(array[i]);
      number--;
    }
  }
  return result.reverse();
}

//tests
evenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9], 3); //=> [4, 6, 8]
evenNumbers([-22, 5, 3, 11, 26, -6, -7, -8, -9, -8, 26], 2); //=> [-8, 26]
evenNumbers([6, -25, 3, 7, 5, 5, 7, -3, 23], 1); //=> [6]
