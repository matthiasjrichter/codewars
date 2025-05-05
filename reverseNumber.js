// https://www.codewars.com/kata/555bfd6f9f9f52680f0000c5
//
// Given a number, write a function to output its reverse digits. (e.g. given 123 the answer is 321)
//
// Numbers should preserve their sign; i.e. a negative number should still be negative when reversed.
//
// Examples
//  123 ->  321
// -456 -> -654
// 1000 ->    1
//
// function reverseNumber(n) {
//     return 0
//   }

// String and Array approach
function reverseNumber(n) {
  let reversedString = [...String(Math.abs(n))].reverse().join("");
  let reversedNum = +reversedString;
  return n < 0 ? reversedNum * -1 : reversedNum;
}

// Math approach
function reverseNumber(n) {
  let abs = Math.abs(n);
  let result = "";
  while (abs) {
    result += abs % 10;
    abs = Math.floor(abs / 10);
  }
  return Number(result * Math.sign(n));
}

// Even more math
function reverseNumber(n) {
  let abs = Math.abs(n);
  let result = 0;
  while (abs) {
    result = (result * 10) + (abs % 10);
    abs = Math.floor(abs / 10);
  }
  return result * Math.sign(n);
}

// Test
reverseNumber(-123); // -321
