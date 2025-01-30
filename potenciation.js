// https://www.codewars.com/kata/59fc72fe235f93838b002235
//
// Your task is to implement a function that takes two inputs, x and y, and returns the value of x raised to the power of y.
//
// Simple, right? But you are NOT allowed to use Math.pow();
//
// Both x and y will be natural numbers (non-negative integers) in range 0 <= x,y <= 13.
//
// Special Case: For this challenge, 0^0 is defined to be 1.
//
// MathematicsAlgorithmsFundamentals
//
// function power(x,y){
//     //SHOW ME WHAT YOU GOT!
//   }

function power(x, y) {
  return x ** y;
}

// arrow function
const power = (x, y) => x ** y;

// let's also do a for loop just for fun
function power(x, y) {
  if (y === 0) return 1;
  let result = 1;
  for (let i = 0; i < y; i++) {
    result *= x;
  }
  return result;
}

// while loop because why not?
function power(x, y) {
  if (y === 0) return 1;
  let result = 1;
  while (y) {
    result *= x;
    y--
  }
  return result;
}
