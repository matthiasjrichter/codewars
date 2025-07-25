// https://www.codewars.com/kata/57a05e0172292dd8510001f7
//
// Write function splitSentence which will create a list of strings from a string.
//
// Example:
//
// "hello world" -> ["hello", "world"]
//
// function splitSentence(s) {
//   return '';
// }

function splitSentence(s) {
  return s.split(" ");
}

// Arrow function
const splitSentence = (s) => s.split(" ");
