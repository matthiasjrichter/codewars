// https://www.codewars.com/kata/5a29a0898f27f2d9c9000058
// In this Kata, you will be given a string and your task will be to return a list of ints detailing the count of uppercase letters, lowercase, numbers and special characters, as follows.
//
// Solve("*'&ABCDabcde12345") = [4,5,5,3].
// --the order is: uppercase letters, lowercase, numbers and special characters.
// More examples in the test cases.
//
// Good luck!
//
// function solve(s){
//     //..
//    }

function solve(s) {
  let upper = 0;
  let lower = 0;
  let nums = 0;
  let special = 0;

  for (let char of s) {
    if (/[A-Z]/.test(char)) upper++;
    else if (/[a-z]/.test(char)) lower++;
    else if (/[0-9]/.test(char)) nums++;
    else special++;
  }

  return [upper, lower, nums, special];
}

function solve(s) {
  let upper = s.match(/[A-Z]/g) || [];
  let lower = s.match(/[a-z]/g) || [];
  let nums = s.match(/[0-9]/g) || [];
  let special = s.match(/[^A-Z0-9]/gi) || [];

  return [upper.length, lower.length, nums.length, special.length];
}

//test
solve("*'&ABCDabcde12345"); // [4,5,5,3]
