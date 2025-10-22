// https://www.codewars.com/kata/58aed2cafab8faca1d000e20/
//
// You are provided with an array of positive integers and an additional integer n (n > 1).
//
// Calculate the sum of each value in the array to the nth power. Then subtract the sum of the original array.
//
// Examples
// {1, 2, 3}, 3  -->  (1^3 + 2^3 + 3^3 ) - (1 + 2 + 3)  -->  36 - 6  -->  30
// {1, 2}, 5     -->  (1^5 + 2^5) - (1 + 2)             -->  33 - 3  -->  30
//
// function modifiedSum(a, n) {
//   // Write your code here
// }

function modifiedSum(a, n) {
  const sumOfPowers = a.reduce((sum, num) => sum + Math.pow(num, n), 0);
  const sumOfOriginal = a.reduce((sum, num) => sum + num, 0);
  return sumOfPowers - sumOfOriginal;
}

// Arrow function
const modifiedSum = (a, n) => a.reduce((sum, num) => sum + (Math.pow(num, n) - num), 0);
