// https://www.codewars.com/kata/52bc74d4ac05d0945d00054e/
//
// Write a function named first_non_repeating_letter† that takes a string input, and returns the first character that is not repeated anywhere in the string.
//
// For example, if given the input 'stress', the function should return 't', since the letter t only occurs once in the string, and occurs first in the string.
//
// As an added challenge, upper- and lowercase letters are considered the same character, but the function should return the correct case for the initial letter. For example, the input 'sTreSS' should return 'T'.
//
// If a string contains all repeating characters, it should return an empty string ("");
//
// † Note: the function is called firstNonRepeatingLetter for historical reasons, but your function should handle any Unicode character.
//
// function firstNonRepeatingLetter(s) {
//   // Add your code here
// }

function firstNonRepeatingLetter(s) {
  const freq = new Map();
  for (const c of s) freq.set(c.toLowerCase(), (freq.get(c.toLowerCase()) || 0) + 1);
  for (const c of s) if (freq.get(c.toLowerCase()) === 1) return c;
  return "";
}

// Alternative
function firstNonRepeatingLetter(s) {
  const lower = s.toLowerCase();
  const freq = new Map();

  for (const c of lower) freq.set(c, (freq.get(c) ?? 0) + 1);
  for (let i = 0; i < s.length; i++) if (freq.get(lower[i]) === 1) return s[i];

  return "";
}