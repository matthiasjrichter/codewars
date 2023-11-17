// https://www.codewars.com/kata/57ea5b0b75ae11d1e800006c/javascript
//
// Write a function that takes an array of strings as an argument and returns a sorted array containing the same strings, ordered from shortest to longest.
//
// For example, if this array were passed as an argument:
//
// ["Telescopes", "Glasses", "Eyes", "Monocles"]
//
// Your function would return the following array:
//
// ["Eyes", "Glasses", "Monocles", "Telescopes"]
//
// All of the strings in the array passed to your function will be different lengths, so you will not have to decide how to order multiple strings of the same length.
//
// function sortByLength (array) {
//     // Return an array containing the same strings,
//     // ordered from shortest to longest
//       return [];
//   }

function sortByLength(array) {
  return array.sort((a, b) => a.length - b.length);
}

//alternative
const sortByLength = (array) => array.sort((a, b) => a.length - b.length);

//Without modifying the original array
const sortByLength = (array) => [...array].sort((a, b) => a.length - b.length);

//using slice()
const sortByLength = (array) => array.slice().sort((a, b) => a.length - b.length);

//test
sortByLength(["Telescopes", "Glasses", "Eyes", "Monocles"]) // ["Eyes", "Glasses", "Monocles", "Telescopes"]