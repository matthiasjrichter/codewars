// https://www.codewars.com/kata/5842df8ccbd22792a4000245/javascript
//
// Write Number in Expanded Form
// You will be given a number and you will need to return it as a string in Expanded Form. For example:
//
//    12 --> "10 + 2"
//    45 --> "40 + 2"
// 70304 --> "70000 + 300 + 4"
// NOTE: All numbers will be whole numbers greater than 0.
//
// If you liked this kata, check out part 2!!
//
// function expandedForm(num) {
//     // Your code here
//   }

// input is a number
// return a string
// convert input to string.
// if first char != 0 pad it with string length.
// delete first char
// add to array
// join with " + "

function expandedForm(num) {
  numStr = String(num);
  let arr = [];
  while (numStr.length) {
    if (numStr[0] !== "0") {
      arr.push(numStr[0].padEnd(numStr.length, "0"));
    }
    numStr = numStr.slice(1, numStr.length);
  }
  return arr.join(" + ");
}

// alternative
function expandedForm(num) {
  let numStr = String(num);
  let result = [];
  for (let i = 0; i < numStr.length; i++) {
    let currentDigit = numStr[i];
    if (currentDigit !== "0") {
      result.push(currentDigit.padEnd(numStr.length - i, "0"));
    }
  }
  return result.join(" + ");
}

// test
expandedForm(70304); // "70000 + 300 + 4"
