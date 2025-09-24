// https://www.codewars.com/kata/57fcaed83206fb15fd00027a
//
// Task
// Write a method, that replaces every nth char oldValue with char newValue.
//
// Inputs
// text: the string to modify
// n: change the target letter every nth occurrencies
// old_value (or similar): the targetted character
// new_value (or similar): the character to use as replacement
// Note for untyped languages: all inputs are always valid and of their expected type.
//
// Rules
// Your method has to be case sensitive!
// If n is 0 or negative or if it is larger than the count of the oldValue, return the original text without a change.
// Example:
// n:         2
// old_value: 'a'
// new_value: 'o'
// "Vader said: No, I am your father!"
//   1     2          3        4       -> 2nd and 4th occurence are replaced
// "Vader soid: No, I am your fother!"
// As you can see in the example: The first changed is the 2nd 'a'. So the start is always at the nth suitable char and not at the first!
//
// function replaceNth(text, n, oldValue, newValue) {
//
// }

function replaceNth(text, n, oldValue, newValue) {
  let count = 0;
  let result = "";
  for (let char of text) {
    if (char === oldValue) count++;
    if (char === oldValue && count === n) {
      result += newValue;
      count = 0;
    } else result += char;
  }
  return result;
}

// Alternative
function replaceNth(text, n, oldValue, newValue) {
  let count = 0;
  let result = "";
  for (let char of text) {
    if (char === oldValue && ++count === n) {
      result += newValue;
      count = 0;
    } else result += char;
  }
  return result;
}

// Modulo
function replaceNth(text, n, oldValue, newValue) {
  if (n < 0) return text;
  let count = 0;
  let result = "";
  for (let char of text) {
    if (char === oldValue && ++count % n === 0) result += newValue;
    else result += char;
  }
  return result;
}

// Ternary
function replaceNth(text, n, oldValue, newValue) {
  if (n <= 0) return text;
  let count = 0;
  let result = "";
  for (let char of text) result += char === oldValue && ++count % n === 0 ? newValue : char;
  return result;
}

// 0 is falsy
function replaceNth(text, n, oldValue, newValue) {
  if (n <= 0) return text;
  let count = 0;
  let result = "";
  for (let char of text) result += char === oldValue && !(++count % n) ? newValue : char;
  return result;
}

// .map()
const replaceNth = (text, n, oldValue, newValue, count = 0) => {
    if (n <= 0) return text;
    return text.split("").map((e) => e === oldValue && !(++count % n) ? newValue : e).join("");
}

// one line for fun
const replaceNth = (text, n, oldV, newV, cnt = 0) => n <= 0 ? text : [...text].map((e) => e === oldV && !(++cnt % n) ? newV : e).join("");