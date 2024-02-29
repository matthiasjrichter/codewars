// https://www.codewars.com/kata/57a62154cf1fa5b25200031e
//
// Write function alternateCase which switch every letter in string from upper to lower and from lower to upper. E.g: Hello World -> hELLO wORLD
//
// function alternateCase(s) {
//     return '';
//   }

function alternateCase(s) {
  let result = [];
  for (let char of s) {
    if (char.toLowerCase() === char) {
      result.push(char.toUpperCase());
    } else {
      result.push(char.toLowerCase());
    }
  }
  return result.join("");
}

//alternative
function alternateCase(s) {
  let result = [];
  for (let char of s) {
    if (char.toLowerCase() === char) result.push(char.toUpperCase());
    else result.push(char.toLowerCase());
  }
  return result.join("");
}

//arrow function and map()
const alternateCase = (s) => s.split("").map((e) => e.toLowerCase() === e ? e.toUpperCase() : e.toLowerCase()).join("");

//spread
const alternateCase = (s) => [...s].map((e) => e.toLowerCase() === e ? e.toUpperCase() : e.toLowerCase()).join("");

//test
alternateCase("Hello World"); // -> hELLO wORLD
