// https://www.codewars.com/kata/57f8ee485cae443c4d000127
//
// Modify the spacify function so that it returns the given string with spaces inserted between each character.
//
// spacify("hello world") // returns "h e l l o   w o r l d"
//
// function spacify(str) {
//     // return
//   }

function spacify(str) {
  return str.split("").join(" ");
}

//arrow function and spread
const spacify = (str) => [...str].join(" ");

//test
spacify("hello world"); // returns "h e l l o   w o r l d"
