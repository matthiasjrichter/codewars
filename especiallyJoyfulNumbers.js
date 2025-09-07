// https://www.codewars.com/kata/570523c146edc287a50014b1
//
// Positive integers that are divisible exactly by the sum of their digits are called Harshad numbers. The first few Harshad numbers are: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 18, ...
//
// We are interested in Harshad numbers where the product of its digit sum s and s with the digits reversed, gives the original number n. For example consider number 1729:
//
// its digit sum, s = 1 + 7 + 2 + 9 = 19
// reversing s = 91
// and 19 * 91 = 1729 --> the number that we started with.
// Complete the function which tests if a positive integer n is Harshad number, and returns True if the product of its digit sum and its digit sum reversed equals n; otherwise return False.
//
// function numberJoy(n) {
//     // your code
// }

function numberJoy(n) {
  let digitSum = String(n).split("").reduce((a, c) => a + +c, 0);
  let digitSumReversed = String(digitSum).split("").reverse().join("");
  return digitSum * digitSumReversed === n;
}

// Math approach and recursive helper functions
function sumDigits(num) {
  let absNum = Math.abs(num);
  if (absNum < 10) return absNum;
  return (absNum % 10) + sumDigits(Math.floor(absNum / 10));
}

function reverseNum(num, reversed = 0) {
  if (num === 0) return reversed;
  return reverseNum(Math.floor(num / 10), reversed * 10 + (num % 10));
}

function numberJoy(n) {
  let digitSum = sumDigits(n);
  let digitSumReversed = reverseNum(digitSum);
  console.log(n, digitSum, digitSumReversed);
  return digitSum * digitSumReversed === n;
}

// more concise
const sumDigits = (n) => (abs = Math.abs(n)) < 10 ? abs : abs % 10 + sumDigits(Math.floor(abs / 10));

const reverseNum = (n, reversed = 0) => n ? reverseNum(Math.floor(n / 10), reversed * 10 + n % 10) : reversed;

function numberJoy(n) {
  let digitSum = sumDigits(n);
  let digitSumReversed = reverseNum(digitSum)
  return digitSum * digitSumReversed === n;
}

// even more concise
const sumDigits = (n) => (abs = Math.abs(n)) < 10 ? abs : abs % 10 + sumDigits(Math.floor(abs / 10));
const reverseNum = (n, reversed = 0) => n ? reverseNum(Math.floor(n / 10), reversed * 10 + n % 10) : reversed;
const numberJoy = (n) => (digitSum = sumDigits(n)) * reverseNum(digitSum) === n;;