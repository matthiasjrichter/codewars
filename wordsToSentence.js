// https://www.codewars.com/kata/57a06005cf1fa5fbd5000216
// 
// Write function which will create a string from a list of strings, separated by space.
// 
// Example:
// 
// ["hello", "world"] -> "hello world"
// 
// function wordsToSentence(words) {
//   return '';
// }

function wordsToSentence(words) {
  return words.join(" ");
}

// Arrow function
const wordsToSentence = (words) => words.join(" ");