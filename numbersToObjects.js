// https://www.codewars.com/kata/57ced2c1c6fdc22123000316
//
// You will be given an array of numbers.
//
// For each number in the array you will need to create an object.
//
// The object key will be the number, as a string. The value will be the corresponding character code, as a string.
//
// Return an array of the resulting objects.
//
// All inputs will be arrays of numbers. All character codes are valid lower case letters. The input array will not be empty.
//
// function numObj(s){
//
// }

function numObj(s) {
  let result = [];
  for (let n of s) {
    key = String(n);
    val = String.fromCharCode(n);
    result.push({ [key]: val });
  }
  return result;
}

// More concise
function numObj(s) {
  let result = [];
  for (let n of s) result.push({ [n]: String.fromCharCode(n) });
  return result;
}

// Arrow function and .map()
const numObj = (s) => s.map((n) => ({ [n]: String.fromCharCode(n) }));
