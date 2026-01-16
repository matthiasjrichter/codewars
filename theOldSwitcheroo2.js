// https://www.codewars.com/kata/55d6a0e4ededb894be000005
// 
// This is a follow up to my kata the old switcheroo.
// 
// Write a function that takes in a string and replaces all the letters with their respective positions in the English alphabet; e.g. 'a' is 1, 'z' is 26. The function should be case-insensitive.
// 
// 'abc'      --> '123'
// 'ABC'      --> '123'
// 'codewars' --> '315452311819'
// 'abc-#@5'  --> '123-#@5'
// 
// function encode(str) {
//   // Write code here.
//   return "";
// }

const getPosition = char => char.toUpperCase().charCodeAt(0) - 64;
const encode = str => [...str].map(char => /[A-Za-z]/.test(char) ? getPosition(char) : char).join("");