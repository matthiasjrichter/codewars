// https://www.codewars.com/kata/57a06b07cf1fa58b2b000252/
//
// Write a function, isItLetter or is_it_letter or IsItLetter, which tells us if a given character is a letter or not.
//
// function isItLetter(character) {
//   return true || false ;
// }

// Kata is unclear on whether it only considers ASCII characters letters. Provided test cases testonly for ASCII characters. Therefor two solutions (both pass):

// ASCII only
const isItLetter = (c) => /[a-z]/i.test(c);

// Allowing unicode letters like ä, ß, ú
const isItLetter = (c) => /\p{L}/u.test(c);