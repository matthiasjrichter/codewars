// https://www.codewars.com/kata/57aa218e72292d98d500240f/
//
// Write function heron which calculates the area of a triangle with sides a, b, and c (x, y, z in COBOL).
//
// Heron's formula:
//
// s
// ∗
// (
// s
// −
// a
// )
// ∗
// (
// s
// −
// b
// )
// ∗
// (
// s
// −
// c
// )
// s∗(s−a)∗(s−b)∗(s−c)
// ​
//
// where
//
// s
// =
// a
// +
// b
// +
// c
// 2
// s=
// 2
// a+b+c
// ​
//
// Output should have 2 digits precision.
//
// function heron(a, b, c) {
//   return 0;
// }

// This passes the test cases:
const heron = (a, b, c) => {
  let s = (a + b + c) / 2;
  return Math.sqrt(s * (s - a) * (s - b) * (s - c));
};

// If we want exactly two digits after the decimal point:
const heron = (a, b, c) => {
  let s = (a + b + c) / 2;
  return +Math.sqrt(s * (s - a) * (s - b) * (s - c)).toFixed(2);
};
