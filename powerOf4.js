// https://www.codewars.com/kata/544d114f84e41094a9000439/
//
// Write a method that returns true if a given parameter is a power of 4, and false if it's not. If parameter is not an Integer (eg String, Array) method should return false as well.
//
// (In C# Integer means all integer Types like Int16,Int32,.....)
//
// Examples
// powerOf4(1024) // returns true
// powerOf4(44) // returns false
// powerOf4("not a positive integer") // returns false
//
// function powerOf4(n) {
//
// }

function powerOf4(n) {
  if (!Number.isInteger(n)) return false;

  while (n > 1) {
    if (n % 4) return false;
    n /= 4;
  }

  return n === 1;
}

// Recursion
function powerOf4(n) {
  if (!Number.isInteger(n)) return false;
  if (n > 1) return n % 4 ? false : powerOf4(n / 4);
  return n === 1;
}

// Alternative
function powerOf4(n) {
  if (!Number.isInteger(n) || n <= 0) return false;
  if (n === 1) return true;
  return !(n % 4) && powerOf4(n / 4);
}

// More concise
function powerOf4(n) {
  if (!Number.isInteger(n) || n <= 0) return false;
  return n === 1 ? true : !(n % 4) && powerOf4(n / 4);
}

// Math approach
const powerOf4 = (n) => Number.isInteger(n) && Number.isInteger(Math.log(n)/Math.log(4));