// https://www.codewars.com/kata/59564f3bcc15b5591a00004a
// 
// Given an array of strings, write a function that returns an array containing only the elements of the given array whose length is an even number.
// 
// Example
// ["One", "Two", "Three", "Four"] --> ["Four"]
// 
// function filterEvenLengthWords(words) {
//   // your code here
// }

const filterEvenLengthWords = (words) => words.filter((word) => word.length % 2 === 0);

// shorter
const filterEvenLengthWords = (words) => words.filter((e) => !(e.length % 2));