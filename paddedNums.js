// https://www.codewars.com/kata/51c89385ee245d7ddf000001/
//
// Complete the solution so that it returns a formatted string. The return value should equal "Value is VALUE" where value is a 5 digit padded number.
//
// Example:
//
// solution(5); // should return "Value is 00005"
//
// function solution(value){
//     //...
//   }

function solution(value) {
  let valueString = value + "";
  return "Value is " + valueString.padStart(5, "0");
}

// arrow function and template literal
const solution = (value) => `Value is ${String(value).padStart(5, "0")}`;

// loop for fun
function solution(value) {
  let valueString = value + "";
  while (valueString.length < 5) {
    valueString = "0" + valueString;
  }
  return "Value is " + valueString;
}

// test
solution(5); // "Value is 00005"
