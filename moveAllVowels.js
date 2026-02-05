// https://www.codewars.com/kata/56bf3287b5106eb10f000899
// 
// Description:
// Given a string as input, move all of its vowels to the end of the string, in the same order as they were before.
// 
// Vowels are (in this kata): a, e, i, o, u
// 
// Note: all provided input strings are lowercase.
// 
// Examples
// "day"    ==>  "dya"
// "apple"  ==>  "pplae"
// 
// function moveVowel(input) {
// 
// }

//Ternary
function moveVowel(input) {
  const vowelsSet = new Set("aeiou");
  let vowels = "", consonants = "";
  for (const char of input) vowelsSet.has(char) ? vowels += char : consonants += char;
  return consonants + vowels;
}

// if/else
function moveVowel(input) {
  const vowelsSet = new Set("aeiou");
  let vowels = "", consonants = "";
  for (const char of input){
    if (vowelsSet.has(char)) vowels += char
    else consonants += char
  }
  return consonants + vowels;
}

// One line for fun
const moveVowel = input => input.match(/[^aeiou]/g).concat(input.match(/[aeiou]/g)).join("");

// Even more fun
const moveVowel = input => [...input.match(/[^aeiou]/g) ?? [], ...input.match(/[aeiou]/g) ?? []].join("");