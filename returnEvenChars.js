// https://www.codewars.com/kata/566044325f8fddc1c000002c
//
// Write a function that returns a sequence (index begins with 1) of all the even characters from a string. If the string is smaller than two characters or longer than 100 characters, the function should return "invalid string".
//
// For example:
//
// "abcdefghijklm" --> ["b", "d", "f", "h", "j", "l"]
// "a"             --> "invalid string"
//
// function evenChars(string) {
//   return [] || "invalid string"
// }

// for loop
function evenChars(string) {
  if (string.length < 2 || string.length > 100) return "invalid string";
  let result = [];
  for (let i = 1; i < string.length; i += 2) result.push(string[i]);
  return result;
}

// filter
function evenChars(string) {
  if (string.length < 2 || string.length > 100) return "invalid string";
  return [...string].filter((_, i) => i % 2);
}

// Arrow function and ternary
const evenChars = (string) => (string.length < 2 || string.length > 100) ? "invalid string" : [...string].filter((_, i) => i % 2);

// Test
evenChars("abcdefghijklm"); // ["b", "d", "f", "h", "j", "l"]