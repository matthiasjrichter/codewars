// https://www.codewars.com/kata/59dd2c38f703c4ae5e000014
// 
// In this Kata, you will be given a string that has lowercase letters and numbers. Your task is to compare the number groupings and return the largest number. Numbers will not have leading zeros.
// 
// For example, solve("gh12cdy695m1") = 695, because this is the largest of all number groupings.
// 
// Good luck!
// 
// function solve(s) {
//     return 0;
//   };

function solve(s) {
    return Math.max(...s.replace(/[^0-9]/g, "x").split("x"));
  };

// arrow function
const solve = (s) => Math.max(...s.replace(/[^0-9]/g, "x").split("x"));