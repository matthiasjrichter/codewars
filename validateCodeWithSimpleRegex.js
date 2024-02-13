// https://www.codewars.com/kata/56a25ba95df27b7743000016
//
// Basic regex tasks. Write a function that takes in a numeric code of any length. The function should check if the code begins with 1, 2, or 3 and return true if so. Return false otherwise.
//
// You can assume the input will always be a number.
//
// function validateCode (code) {
//   //your code here
//   }

function validateCode(code) {
  return /[123]/.test(String(code)[0]);
}

//range and different way to convert to string
function validateCode(code) {
  return /[1-3]/.test((code + "")[0]);
}

//arrow function, "^" assertion to test only beginning of input. Converts to string automagically.
const validateCode = (code) => /^[1-3]/.test(code);

//test
validateCode(123); // true
validateCode(248); // true
validateCode(8); // false