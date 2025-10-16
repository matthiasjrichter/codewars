// https://www.codewars.com/kata/5a995c2aba1bb57f660001fd/
//
// Let's create some scrolling text!
//
// Your task is to complete the function which takes a string, and returns an array with all possible rotations of the given string, in uppercase.
//
// Example
// scrollingText("codewars") should return:
//
// [ "CODEWARS",
//   "ODEWARSC",
//   "DEWARSCO",
//   "EWARSCOD",
//   "WARSCODE",
//   "ARSCODEW"
//   "RSCODEWA",
//   "SCODEWAR" ]
// Good luck!
//
// function scrollingText(text){
//   return ["GOOD LUCK!", "OOD LUCK!G", ...]
// }

// for loop
function scrollingText(text) {
  text = text.toUpperCase();
  let result = [text];
  for (let i = 0; i < text.length - 1; i++) {
    text = text.slice(1) + text[0];
    result.push(text);
  }
  return result;
}

// .map() and .slice()
const scrollingText = s => [...s].map((_, i) => (s.slice(i) + s.slice(0, i)).toUpperCase());

// Recursion
const scrollingText = (text, result = []) => {
  if (result.length === text.length) return result;
  result.push(text.toUpperCase());
  return scrollingText(text.slice(1) + text[0], result);
};

// .toSplice() (not working on codewars due to Node.js v18)
const scrollingText = (text, result = []) => result.length === text.length ? result : scrollingText(text.slice(1) + text[0], result.toSpliced(result.length, 0, text.toUpperCase()));

// .concat()
const scrollingText = (text, result = []) => result.length === text.length ? result : scrollingText(text.slice(1) + text[0], result.concat(text.toUpperCase()));

// spread
const scrollingText = (text, result = []) => result.length === text.length ? result : scrollingText(text.slice(1) + text[0], [...result, text.toUpperCase()]);
