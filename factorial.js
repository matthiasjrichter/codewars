// https://www.codewars.com/kata/54ff0d1f355cfd20e60001fc/
//
// In mathematics, the factorial of a non-negative integer n, denoted by n!, is the product of all positive integers less than or equal to n. For example: 5! = 5 * 4 * 3 * 2 * 1 = 120. By convention the value of 0! is 1.
//
// Write a function to calculate factorial for a given input. If input is below 0 or above 12 throw an exception of type ArgumentOutOfRangeException (C#) or IllegalArgumentException (Java) or RangeException (PHP) or throw a RangeError (JavaScript) or ValueError (Python) or return -1 (C).
//
// function factorial(n)
// {
//   // Calculate the factorial here
// }
////////

//while loop
function factorial(n) {
  if (n === 0) return 1;
  if (n < 0 || n > 12) throw new RangeError();
  let count = 1;
  let fac = 1;
  while (count <= n) {
    fac *= count;
    count++;
  }
  return fac;
}

//for loop
function factorial(n) {
  if (n === 0) return 1;
  if (n < 0 || n > 12) throw new RangeError();
  let fac = 1;
  for (i = 1; i <= n; i++) {
    fac *= i;
  }
  return fac;
}

//recursion
function factorial(n) {
  if (n === 0) return 1;
  if (n < 0 || n > 12) throw new RangeError();
  return n * factorial(n - 1);
}

//tests
factorial(5); // 120
factorial(0); // 1
factorial(-2); // RangeError
factorial(14); // RangeError
