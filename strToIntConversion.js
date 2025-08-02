// https://www.codewars.com/kata/54fdadc8762e2e51e400032c/
//
// JavaScript provides a built-in parseInt method.
//
// It can be used like this:
//
// "10" returns 10
// "10 apples" also returns 10
// We would like it to return "NaN" (as a string) for the second case because the input string is not a valid number.
//
// You are asked to write a function with the following rules:
//
// It should make the conversion if the given string only contains a single integer value (and possibly spaces - including tabs, line feeds... - at both ends)
// For all other strings (including the ones representing float values), it should return NaN
// It should assume that all numbers are not signed and written in base 10
//
// function myParseInt(str) {
//   return 0;
// }

function myParseInt(str) {
  let digits = "0123456789";
  let trimmed = str.trim();
  return trimmed.split("").every((e) => digits.includes(e)) ? +trimmed : NaN;
}

// Regexp
function myParseInt(str) {
  let trimmed = str.trim();
  return /^\d+$/.test(trimmed) ? +trimmed : NaN;
}

// One line for fun
const myParseInt = (str) => /^\d+$/.test(str.trim()) ? +str.trim() : NaN;

// More concise and trimming s inside .test() for reuse
const myParseInt = (s) => /^\d+$/.test(s = s.trim()) ? +s : NaN;

// Actually we don't need to trim the output because the unary plus operator implicitly trims whitespace
const myParseInt = (s) => /^\d+$/.test(s.trim()) ? +s : NaN;