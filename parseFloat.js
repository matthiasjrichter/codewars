//www.codewars.com/kata/57a386117cb1f31890000039/train/javascript

// Write function parseF which takes an input and returns a number or null if conversion is not possible. The input can be one of many different types so be aware.
//
// function parseF(s) {
//     return null;
//   }

function parseF(s) {
  if (typeof s === "number") return s;
  if (typeof s === "string") {
    const parsedNum = parseFloat(s);
    return isNaN(parsedNum) ? null : parsedNum;
  }
  return null;
}

//alternative
function parseF(s) {
  return isNaN(parseFloat(s)) ? null : parseFloat(s);
}

//arrow function
const parseF = (s) => (isNaN(parseFloat(s)) ? null : parseFloat(s));
