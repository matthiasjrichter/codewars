// https://www.codewars.com/kata/5a4138acf28b82aa43000117
//
// DESCRIPTION:
// Task
// Given an array of integers , Find the maximum product obtained from multiplying 2 adjacent numbers in the array.
//
// Notes
// Array/list size is at least 2.
//
// Array/list numbers could be a mixture of positives, negatives also zeroes .
//
// Input >> Output Examples
// adjacentElementsProduct([1, 2, 3]); ==> return 6
// Explanation:
// The maximum product obtained from multiplying 2 * 3 = 6, and they're adjacent numbers in the array.
// adjacentElementsProduct([9, 5, 10, 2, 24, -1, -48]); ==> return 50
// Explanation:
// Max product obtained from multiplying 5 * 10  =  50 .
//
// adjacentElementsProduct([-23, 4, -5, 99, -27, 329, -2, 7, -921])  ==>  return -14
// Explanation:
// The maximum product obtained from multiplying -2 * 7 = -14, and they're adjacent numbers in the array.
// function adjacentElementsProduct(array) {
//     return 0
//   }

function adjacentElementsProduct(array) {
  let max = array[0] * array[1];
  array.forEach((e, i, a) => {
    if (e * a[i + 1] > max) max = e * a[i + 1];
  });
  return max;
}

//-Infinity
function adjacentElementsProduct(array) {
  let max = -Infinity;
  array.forEach((e, i, a) => {
    if (e * a[i + 1] > max) max = e * a[i + 1];
  });
  return max;
}
//test
adjacentElementsProduct([9, 5, 10, 2, 24, -1, -48]); //==> return 50
