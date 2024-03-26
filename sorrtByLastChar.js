// https://www.codewars.com/kata/57eba158e8ca2c8aba0002a0
//
// Given a string of words (x), you need to return an array of the words, sorted alphabetically by the final character in each.
//
// If two words have the same last letter, the returned array should show them in the order they appeared in the given string.
//
// All inputs will be valid.
//
// function last(x){
//
// }

function last(x) {
  let arr = x.split(" ");
  arr.sort((a, b) => a.charCodeAt(a.length - 1) - b.charCodeAt(b.length - 1));
  return arr;
}

//arrow function
const last = (x) => x.split(" ").sort((a, b) => a.charCodeAt(a.length - 1) - b.charCodeAt(b.length - 1));

//localeCompare() and slice() (this also takes into account locale-specific orderings (e.g., “ä” is sorted with “a” in German).)
function last(x) {
  return x.split(" ").sort((a, b) => a.slice(-1).localeCompare(b.slice(-1)));
}

//test
last("take me to semynak"); // ['take', 'me', 'semynak', 'to']