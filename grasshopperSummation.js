// https://www.codewars.com/kata/55d24f55d7dd296eb9000030
//
// Summation
// Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0.
//
// For example (Input -> Output):
//
// 2 -> 3 (1 + 2)
// 8 -> 36 (1 + 2 + 3 + 4 + 5 + 6 + 7 + 8)
//
// var summation = function (num) {
//     // Code here
//   }

var summation = function (num) {
  let result = [];
  for (let i = 1; i <= num; i++) {
    result.push(i);
  }
  return result.reduce((a, c) => a + c, 0);
};

//alternative
var summation = function (num) {
  let result = 0;
  for (let i = 1; i <= num; i++) {
    result += i;
  }

  return result;
};

//Gaussian
const summation = (n) => (n * (n + 1)) / 2;

//test
summation(8); // -> 36 (1 + 2 + 3 + 4 + 5 + 6 + 7 + 8)
