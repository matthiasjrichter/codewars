// https://www.codewars.com/kata/5939ab6eed348a945f0007b2
//
// Given a string of space separated words, return the longest word.
// If there are multiple longest words, return the rightmost longest word.
//
// Examples
// "red white blue"  =>  "white"
// "red blue gold"   =>  "gold"
//
// function longestWord(stringOfWords) {
//     // Give me back the longest word!
//   }

function longestWord(stringOfWords) {
  let arr = stringOfWords.split(" ");
  return arr.sort((a, b) => a.length - b.length)[arr.length - 1];
}
