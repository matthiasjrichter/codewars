// https://www.codewars.com/kata/556196a6091a7e7f58000018
//
// Given a sequence of numbers, find the largest pair sum in the sequence.
//
// For example
//
// [10, 14, 2, 23, 19] -->  42 (= 23 + 19)
// [99, 2, 2, 23, 19]  --> 122 (= 99 + 23)
// Input sequence contains minimum two elements and every element is an integer.
//
// function largestPairSum (numbers) {
//   //TODO: Write your Code here
// }
//

function largestPairSum(numbers) {
  let sorted = numbers.sort((a, b) => b - a);
  return sorted[0] + sorted[1];
}

//destructuring
function largestPairSum(numbers) {
  let [a, b] = numbers.sort((a, b) => b - a);
  return a + b;
}

//test
largestPairSum([10, 14, 2, 23, 19]); // -->  42 (= 23 + 19)
