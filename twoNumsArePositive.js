// https://www.codewars.com/kata/602db3215c22df000e8544f0
// 
// Task:
// Your job is to write a function, which takes three integers a, b, and c as arguments, and returns True if exactly two of the three integers are positive numbers (greater than zero), and False - otherwise.
// 
// Examples:
// twoArePositive(2, 4, -3) == true
// twoArePositive(-4, 6, 8) == true
// twoArePositive(4, -6, 9) == true
// twoArePositive(-4, 6, 0) == false
// twoArePositive(4, 6, 10) == false
// twoArePositive(-14, -3, -4) == false
// 
// function twoArePositive(a, b, c) {
//     // Happy Coding
//   }

// filter()
const twoArePositive = (a, b, c) => [a, b, c].filter((e) => e > 0).length === 2;

// true is 1
const twoArePositive = (a, b, c) => (a > 0) + (b > 0) + (c > 0) === 2;
