// https://www.codewars.com/kata/57cf50a7eca2603de0000090
//
// Move every letter in the provided string forward 10 letters through the alphabet.
//
// If it goes past 'z', start again at 'a'.
//
// Input will be a string with length > 0.
//
// function moveTen(s){
//
// }

const alphabet = "abcdefghijklmnopqrstuvwxyzabcdefghij";
function moveTen(s) {
  let result = "";
  for (const char of s) {
    let charcode = char.charCodeAt(0) - 97;
    result += alphabet.at(charcode + 10);
  }
  return result;
}

// Alternative
const alphabet = "abcdefghijklmnopqrstuvwxyzabcdefghij";
const moveTen = s => [...s].map(e => alphabet[e.charCodeAt(0) - 87]).join("");