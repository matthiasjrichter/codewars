// https://www.codewars.com/kata/5641c3f809bf31f008000042
//
// Each floating-point number should be formatted that only the first two decimal places are returned. You don't need to check whether the input is a valid number because only valid numbers are used in the tests.
//
// Don't round the numbers! Just cut them after two decimal places!
//
// Right examples:
// 32.8493 is 32.84
// 14.3286 is 14.32
//
// Incorrect examples (e.g. if you round the numbers):
// 32.8493 is 32.85
// 14.3286 is 14.33
//
// function twoDecimalPlaces(number) {
//     // Your code here
//   }


function twoDecimalPlaces(number) {
  let arr = String(number).split(".");
  return +(arr[0] + (arr[1] ? "." + arr[1].slice(0, 2) : ""));
}

//Math.trunc() is faster because no conversion to string and array.
const twoDecimalPlaces = (number) => Math.trunc(number * 100) / 100;

//test
twoDecimalPlaces(32.8493); //32.84
