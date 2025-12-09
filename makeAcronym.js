// https://www.codewars.com/kata/57a60bad72292d3e93000a5a
//
// Write function which takes a string and make an acronym of it.
//
// Rule of making acronym in this kata:
//
// split string to words by space char
// take every first letter from word in given string
// uppercase it
// join them toghether
// Eg:
//
// Code wars -> C, w -> C W -> CW
// Note: There will be at least two words in the given string!
//
// function toAcronym(inp){
//   // ...
// }

function toAcronym(inp) {
  let arr = inp.split(" ");
  let result = "";
  for (let word of arr) result += word[0].toUpperCase();
  return result;
}

// Slightly less efficient due to intermediate array
const toAcronym = inp => inp.split(" ").map(e => e[0].toUpperCase()).join("");