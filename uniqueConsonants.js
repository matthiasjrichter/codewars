// https://www.codewars.com/kata/5a19226646d843de9000007d
//
// Complete the function that counts the number of unique consonants in a string (made up of printable ascii characters).
//
// Consonants are letters used in English other than "a", "e", "i", "o", "u".
//
// Remember, your function needs to return the number of unique consonants - disregarding duplicates. For example, if the string passed into the function reads "add", the function should return 1 rather than 2, since "d" is a duplicate.
//
// Similarly, the function should also disregard duplicate consonants of differing cases. For example, "Dad" passed into the function should return 1 as "d" and "D" are duplicates.
//
// Examples
// "add" ==> 1
// "Dad" ==> 1
// "aeiou" ==> 0
// "sillystring" ==> 7
// "abcdefghijklmnopqrstuvwxyz" ==> 21
// "Count my unique consonants!!" ==> 7
//
// function countConsonants(str) {
// // Your code here!
//     return 0;
// }

// Classic for loop
function countConsonants(str) {
  const consonants = new Set("bcdfghjklmnpqrstvwxyz");
  let foundConsonants = new Set();
  for (let char of str.toLowerCase()) {
    if (consonants.has(char)) foundConsonants.add(char);
  }
  return foundConsonants.size;
}

// RexEx and .match()
const countConsonants = str => new Set(str.toLowerCase().match(/[bcdfghjklmnpqrstvwxyz]/g)).size;

// Extracted RegEx for reuse
const CONSONANTS_REGEX = /[bcdfghjklmnpqrstvwxyz]/g;
const countConsonants = str => new Set(str.toLowerCase().match(CONSONANTS_REGEX)).size;