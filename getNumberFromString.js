// https://www.codewars.com/kata/57a37f3cbb99449513000cd8
//
// Write a function which removes from string all non-digit characters and parse the remaining to number. E.g: "hell5o wor6ld" -> 56
//
// Function:
//
// getNumberFromString(s)
//
// function getNumberFromString(s) {
//     return 0;
//   }

function getNumberFromString(s) {
  return +s.match(/[0-9]/g).join("");
}

//arrow function
const getNumberFromString = (s) => +s.match(/[0-9]/g).join("");

//test
getNumberFromString("hell5o wor6ld"); // 56
