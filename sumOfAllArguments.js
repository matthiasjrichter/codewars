// https://www.codewars.com/kata/540c33513b6532cd58000259
// 
// Write a function that finds the sum of all its arguments.
// 
// eg:
// 
// sum(1, 2, 3) // => 6
// sum(8, 2) // => 10
// sum(1, 2, 3, 4, 5) // => 15
// 
// function sum() {
//     // return the sum of all arguments given.
//   }

const sum = (...args) => args.reduce((a, c) => a + c, 0);

// test
sum(1, 2, 3, 4, 5) // => 15