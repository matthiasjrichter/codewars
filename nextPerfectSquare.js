// https://www.codewars.com/kata/56269eb78ad2e4ced1000013/
//
// You might know some pretty large perfect squares. But what about the NEXT one?
//
// Complete the findNextSquare method that finds the next integral perfect square after the one passed as a parameter. Recall that an integral perfect square is an integer n such that sqrt(n) is also an integer.
//
// If the argument is itself not a perfect square then return either -1 or an empty value like None or null, depending on your language. You may assume the argument is non-negative.
//
// Examples ( Input --> Output )
// 121 --> 144
// 625 --> 676
// 114 --> -1  #  because 114 is not a perfect square
//
// function findNextSquare(sq) {
//   // Return the next square if sq is a perfect square, -1 otherwise
//   return -1;
// }

function findNextSquare(sq) {
  let sqrt = Math.sqrt(sq);
  if (Number.isInteger(sqrt)) return (sqrt + 1) ** 2;
  return -1;
}

// Arrow function and ternary
const findNextSquare = (sq) => Number.isInteger(Math.sqrt(sq)) ? (Math.sqrt(sq) + 1)**2 : -1;

// More dry and a bit more concise
const findNextSquare = (sq) => Number.isInteger(sqrt = Math.sqrt(sq)) ? (sqrt + 1)**2 : -1;