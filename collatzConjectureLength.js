// https://www.codewars.com/kata/54fb963d3fe32351f2000102
//
// The Collatz Conjecture states that for any positive natural number n, this process:
//
// if n is even, divide it by 2
// if n is odd, multiply it by 3 and add 1
// repeat
// will eventually reach n = 1.
//
// For example, if n = 20, the resulting sequence will be:
//
// [ 20, 10, 5, 16, 8, 4, 2, 1 ]
// Write a program that will output the count of the Collatz Conjecture for any given n.
// In the example above, the output would be 8.
//
// For more reading see: http://en.wikipedia.org/wiki/Collatz_conjecture
//
// function collatz(n) {
//   //your code here
// }

function collatz(n) {
  let count = 1;
  while (n !== 1) {
    if (n % 2 === 0) n = n / 2;
    else n = n * 3 + 1;
    count++;
  }
  return count;
}

// Ternary
function collatz(n) {
  let count = 1;
  while (n !== 1) {
    n = n % 2 === 0 ? n / 2 : n * 3 + 1;
    count++;
  }
  return count;
}

// 0 is falsy
function collatz(n) {
  let count = 1;
  while (n !== 1) {
    n = n % 2 ? n * 3 + 1 : n / 2;
    count++;
  }
  return count;
}

// Test
collatz(20); // 8
