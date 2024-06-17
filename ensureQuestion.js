// https://www.codewars.com/kata/5866fc43395d9138a7000006/
//
// Given a string, write a function that returns the string with a question mark ("?") appends to the end, unless the original string ends with a question mark, in which case, returns the original string.
//
// For example (Input --> Output)
//
// "Yes" --> "Yes?"
// "No?" --> "No?"
//
// function ensureQuestion(s) {
//     // Code here
//   }

function ensureQuestion(s) {
  if (s.endsWith("?")) return s;
  return s + "?";
}

//arrow function, ternary, template literal
const ensureQuestion = (s) => s.endsWith("?") ? s : `${s}?`;

//test
ensureQuestion("Yes"); //"Yes?"
