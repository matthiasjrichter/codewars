// https://www.codewars.com/kata/523b623152af8a30c6000027
// Now you have to write a function that takes an argument and returns the square of it.
//
// // Write the "square"-function here

function square(n) {
  return n * n;
}

//alternative
const square = (n) => n*n;

//alternative 2
const square = (n) => n**2;

//alternative 3
const square = (n) => Math.pow(n, 2);

//test
square(3); //9
