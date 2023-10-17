// https://www.codewars.com/kata/592915cc1fad49252f000006
// Write a function that accepts two numbers a and b and returns whether a is smaller than, bigger than, or equal to b, as a string.
//
// (5, 4)   ---> "5 is greater than 4"
// (-4, -7) ---> "-4 is greater than -7"
// (2, 2)   ---> "2 is equal to 2"
// There is only one problem...
//
// You cannot use if statements, and you cannot use the ternary operator ? :.
//
// In fact the word if and the character ? are not allowed in your code.
//
// function noIfsNoButs(a, b) {
//     return 'a is greater than b';
//   }
//////////////////////////

//input is two integers (a, b)
// if a = b return "a is equal to b"
// if a > b return "a is greater than b"
// if b > a return "a is smaller than b"


//
function noIfsNoButs(a, b) {
  let compare = a - b;
  return (compare === 0 && `${a} is equal to ${b}` || (compare > 0 && `${a} is greater than ${b}`) || `${a} is smaller than ${b}`);
}

//alternative
const noIfsNoButs = (a, b) => (a < b && `${a} is smaller than ${b}`) || (a > b && `${a} is greater than ${b}`) || `${a} is equal to ${b}`;

//switch
function noIfsNoButs(a, b) {
  switch (true) {
    case a < b: return `${a} is smaller than ${b}`;
    case a > b: return `${a} is greater than ${b}`;
    default: return `${a} is equal to ${b}`;
  }
}

//test cases
noIfsNoButs(5, 4); //"5 is greater than 4"
noIfsNoButs(-4, -7); //"-4 is greater than -7"
noIfsNoButs(2, 2); // "2 is equal to 2"
