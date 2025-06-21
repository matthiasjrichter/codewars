// https://www.codewars.com/kata/563b1f55a5f2079dc100008a
//
// In this kata the aim is to compare each pair of integers from two arrays, and return a new array of large numbers.
//
// Note: Both arrays have the same dimensions.
//
// Example:
// let arr1 = [13, 64, 15, 17, 88];
// let arr2 = [23, 14, 53, 17, 80];
// getLargerNumbers(arr1, arr2); // Returns [23, 64, 53, 17, 88]
//
// function getLargerNumbers(a, b) {
//   return []
// }

// .forEach()
function getLargerNumbers(a, b) {
  let result = [];
  a.forEach((_, i) => result.push(Math.max(a[i], b[i])));
  return result;
}

// Arrow function, .map() and ternary
const getLargerNumbers = (a, b) => a.map((e, i) => e > b[i] ? e : b[i]);

// Arrow function and Math.max()
const getLargerNumbers = (a, b) => a.map((e, i) => Math.max(e, b[i]));