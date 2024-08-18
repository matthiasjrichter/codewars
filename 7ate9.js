// https://www.codewars.com/kata/559f44187fa851efad000087
//
// Write a function that removes every lone 9 that is inbetween 7s.
//
// "79712312" --> "7712312"
// "79797"    --> "777"
//
// function sevenAte9(str) {
//
// }

//while loop and replace()
function sevenAte9(str) {
  while (str.includes("797")) str = str.replace(/797/g, "77");
  return str;
}

//recursion
function sevenAte9(str) {
  return str.includes("797") ? sevenAte9(str.replace(/797/g, "77")) : str;
}

//recursive arrow function
const sevenAte9 = (str) => str.includes("797") ? sevenAte9(str.replace(/797/g, "77")) : str;

//fancier RegExp
const sevenAte9 = (str) => str.replace(/79(?=7)/g, "7");

//tests
sevenAte9("79797"); //"777"
sevenAte9("79712312"); //"7712312"