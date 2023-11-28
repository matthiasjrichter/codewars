// https://www.codewars.com/kata/5a58d46cfd56cb4e8600009d
//
// Task
// Given a positive integer n, calculate the following sum:
//
// n + n/2 + n/4 + n/8 + ...
// All elements of the sum are the results of integer division.
//
// Example
// 25  =>  25 + 12 + 6 + 3 + 1 = 47
//
//
// function halvingSum(n) {
//
// }
//////////////

function halvingSum(n) {
  let arr = [];
  for (let i = n; i > 0; i = Math.floor(i / 2)) {
    arr.push(i);
  }
  return arr.reduce((a, c) => a + c, 0);
}

//while loop
function halvingSum(n) {
  let sum = 0;
  while (n > 0) {
    sum += n;
    n = Math.trunc(n / 2);
  }
  return sum;
}

//recursion
function halvingSum(n) {
  if (n === 1) return n;
  return n + halvingSum(Math.trunc(n / 2));
}

//arrow function, ternary opertor and parseInt()
const halvingSum = (n) => (n === 1 ? n : n + halvingSum(parseInt(n / 2)));

//test
halvingSum(25); //25 + 12 + 6 + 3 + 1 = 47
