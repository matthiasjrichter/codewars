// https://www.codewars.com/kata/6512b3775bf8500baea77663
//
// Given a string indicating a range of letters, return a string which includes all the letters in that range, including the last letter.
// Note that if the range is given in capital letters, return the string in capitals also!
//
// Examples
// "a-z" ➞ "abcdefghijklmnopqrstuvwxyz"
// "h-o" ➞ "hijklmno"
// "Q-Z" ➞ "QRSTUVWXYZ"
// "J-J" ➞ "J"
// Notes
// A hyphen will separate the two letters in the string.
// You don't need to worry about error handling in this kata (i.e. both letters will be the same case and the second letter will not be before the first alphabetically).
//
// function gimmeTheLetters(sp) {
//   return null
// }

function gimmeTheLetters(sp) {
  let start = sp.charCodeAt(0);
  let end = sp.charCodeAt(2);
  let result = "";
  for (let i = start; i <= end; i++) result += String.fromCharCode(i);
  return result;
}

// Alternative
function gimmeTheLetters(sp) {
  let [start, end] = [sp.charCodeAt(0), sp.charCodeAt(2)];
  let result = "";
  for (let i = start; i <= end; i++) result += String.fromCharCode(i);
  return result;
}

// Another Alternative
function gimmeTheLetters(sp) {
  let result = "";
  for (let i = sp.charCodeAt(0); i <= sp.charCodeAt(2); i++) result += String.fromCharCode(i);
  return result;
}

// Array.from()
const gimmeTheLetters = (sp) => {
  let [start, end] = [sp.charCodeAt(0), sp.charCodeAt(2)];
  let range = end - start + 1;
  return Array.from({ length: range }, (_, i) => String.fromCharCode(start + i)).join("");
};

// One line for fun
const gimmeTheLetters = (sp) => Array.from({ length: sp.charCodeAt(2) - sp.charCodeAt(0) + 1 }, (_, i) => String.fromCharCode(sp.charCodeAt(0) + i)).join("");