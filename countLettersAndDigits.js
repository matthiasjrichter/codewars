// https://www.codewars.com/kata/5738f5ea9545204cec000155
//
// Bob is a lazy man.
//
// He needs you to create a method that can determine how many letters (both uppercase and lowercase ASCII letters) and digits are in a given string.
//
// Example:
//
// "hel2!lo" --> 6
//
// "wicked .. !" --> 6
//
// "!?..A" --> 1
//
// function countLettersAndDigits(input) {
//     return 0;
//   }

// RegEx
const countLettersAndDigits = (input) => (input.match(/[a-z0-9]/gi) || []).length;


// Faster
const validChars = new Set("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789");

function countLettersAndDigits(input) {
  let count = 0;
  for (let char of input) {
    if (validChars.has(char)) count++;
  }
  return count;
}

// String instead of Set (less time efficient, more memory efficient)
const validChars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

function countLettersAndDigits(input) {
  let count = 0;
  for (let char of input) {
    if (validChars.includes(char)) count++;
  }
  return count;
}