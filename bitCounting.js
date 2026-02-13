// https://www.codewars.com/kata/526571aae218b8ee490006f4/
// 
// Write a function that takes an integer as input, and returns the number of bits that are equal to one in the binary representation of that number. You can guarantee that input is non-negative.
// 
// Example: The binary representation of 1234 is 10011010010, so the function should return 5 in this case
// 
// function countBits(n) {
//   // Program Me
//     return 0;
// }

const countBits = n => n.toString(2).replaceAll("0", "").length;

// Regex
const countBits = n => n.toString(2).replace(/0/g, "").length;

// .match()
const countBits = n => (n.toString(2).match(/1/g) ?? []).length;

// Optional chaining
const countBits = n => n.toString(2).match(/1/g)?.length ?? 0;