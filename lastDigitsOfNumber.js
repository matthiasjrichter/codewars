// https://www.codewars.com/kata/5cd5ba1ce4471a00256930c0
//
// Your job is to implement a function which returns the last D digits of an integer N as a list.
//
// Special cases:
// If D > (the number of digits of N), return all the digits.
// If D <= 0, return an empty list.
// Examples:
// N = 1
// D = 1
// result = [1]
//
// N = 1234
// D = 2
// result = [3, 4]
//
// N = 637547
// D = 6
// result = [6, 3, 7, 5, 4, 7]
//
// function lastDigit(n, d) {
//
// }

function lastDigit(n, d) {
  if (d <= 0) return [];
  let arr = [...String(n)].map(Number);
  return arr.slice(-d);
}

// Arrow function and ternary
const lastDigit = (n, d) => d > 0 ? [...String(n)].map(Number).slice(-d) : [];

// Math
function lastDigit(n, d) {
  if (d <= 0) return [];
  if (n === 0) return [0];
  let result = [];
  while (d && n > 0) {
    result.unshift(n % 10);
    n = Math.floor(n / 10);
    d--;
  }
  return result;
}