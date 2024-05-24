// https://www.codewars.com/kata/598f76a44f613e0e0b000026
//
// Your task in this kata is to implement a function that calculates the sum of the integers inside a string. For example, in the string "The30quick20brown10f0x1203jumps914ov3r1349the102l4zy dog", the sum of the integers is 3635.
//
// Note: only positive integers will be tested.
//
// function sumOfIntegersInString(s) {
//     return // what the function name says
//   }

function sumOfIntegersInString(s) {
  let ints = s.replace(/[^0-9]/g, " ").split(" ");
  return ints.map(Number).reduce((a, c) => a + c, 0);
}

//RegExp in .split()
const sumOfIntegersInString = (s) => s.split(/[^0-9]/g).map(Number).reduce((a, c) => a + c, 0);

//conversion to number inside .reduce()
const sumOfIntegersInString = (s) => s.split(/[^0-9]/g).reduce((a, c) => a + +c, 0);

//test
sumOfIntegersInString("The30quick20brown10f0x1203jumps914ov3r1349the102l4zy dog"); // 3635
