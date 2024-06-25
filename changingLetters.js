// https://www.codewars.com/kata/5831c204a31721e2ae000294
//
// When provided with a String, capitalize all vowels
//
// For example:
//
// Input : "Hello World!"
//
// Output : "HEllO WOrld!"
//
// Note: Y is not a vowel in this kata.
//
// function swap (string) {
//     return '';
//   }

function swap(string) {
  const vowels = "aeiou";
  return [...string].map((e) => (vowels.includes(e) ? e.toUpperCase() : e)).join("");
}

const swap = (string) => string.replace(/[aeiou]/g, (e) => e.toUpperCase());