// https://www.codewars.com/kata/5872bb7faa04282110000124
//
// Help Kiyo きよ solve her problems LCM Fun!
// Kiyo has been given a series of problems and she needs your help to solve them!
//
// You will be given a two-dimensional array such as the one below.
//
// a =
// [
//   [1, 2, 3, 4, 5, 6, 7, 8, 9],
//   [1, 2, 3, 4, 5, 6, 7, 8, 9],
//   [1, 2, 3, 4, 5, 6, 7, 8, 9],
//   [1, 2, 3, 4, 5, 6, 7, 8, 9],
//   [1, 2, 3, 4, 5, 6, 7, 8, 9],
//   [1, 2, 3, 4, 5, 6, 7, 8, 9],
//   [1, 2, 3, 4, 5, 6, 7, 8, 9],
//   [1, 2, 3, 4, 5, 6, 7, 8, 9],
//   [1, 2, 3, 4, 5, 6, 7, 8, 9]
// ]
//
// Remove everything but odd integers from each sub-array.
//
// Sum the remaining odd integers of each sub-array.
//
// Sum of odds ( a[0] = 1 + 3 + 5 + 7 + 9 ) = 25
//
// Find the Least common multiple of the arrays.
//
//  (25, 25, 25, 25, 25, 25, 25, 25, 25)
//   ^                                ^
//   |                                |
// a[0]-----------------------------a[8]
//
// example : lcm( 25, 25, 25, 25, 25, 25, 25, 25, 25 ) = 25
//
// example : lcm( 37, 29, 19, 38, 31, 28, 15, 24, 9 ) = 1592632440
// Integers are between 0 and 9. Sub-array size is always 9. The number of sub-arrays varies between 9 and 18.
//
// Watch out for non-integers mixed in the arrays. If all arrays are empty return 0.
//
// https://en.wikipedia.org/wiki/Least_common_multiple
//
// function kiyoLcm(a) {
//     //your code
//     }

function gcd(a, b) {
  if (b === 0) {
    return a;
  }
  return gcd(b, a % b);
}

function lcm(a, b) {
  return (a * b) / gcd(a, b);
}

function kiyoLcm(a) {
  if (!a) {
    return 0;
  }

  let filtered = a.map((e) => e.filter((n) => !isNaN(n) && n % 2 !== 0));
  let sums = filtered.map((e) => e.reduce((a, c) => a + c, 0));

  let sumsLcm = sums.reduce((a, c) => lcm(a, c));

  return sumsLcm || 0;
}


//refactor
const gcd = (a, b) => b === 0 ? a : gcd(b, a % b);
const lcm = (a, b) => (a * b) / gcd(a, b);

function kiyoLcm(a) {
  let filtered = a.map((e) => e.filter((n) => !isNaN(n) && n % 2 !== 0));
  let sums = filtered.map((e) => e.reduce((a, c) => a + c, 0));
  let sumsLcm = sums.reduce((a, c) => lcm(a, c));
  return sumsLcm || 0;
}

//tests
kiyoLcm([[], [], [], [], [], [], [], [], []]); //0

kiyoLcm([
  [4, 3, 7, 8, 9, 2, 1, 5, "c"],
  [6, 5, 6, 1, "v", 1, 0, 5, 1],
  [4, 4, "c", 7, 6, 6, 3, 6, 7],
  [1, 7, 7, "l", 5, 8, 9, 5, 9],
  [0, "t", 8, 2, 8, 9, 0, 8, 0],
  [4, 6, 2, 6, "o", 8, 4, 2, 4],
  [3, 6, 9, 2, 0, 8, 2, 3, "u"],
  [9, 3, 1, 9, 4, 4, "u", 7, 7],
  [0, "n", 9, 0, 0, 0, 9, 2, 2],
]); // 0

kiyoLcm([
  [1, 1, 5, 4, 4, 2, 5, 1, 5],
  [4, 2, 3, 5, 1, 4, 4, 2, 5],
  [4, 2, 1, 4, 5, 5, 4, 3, 3],
  [2, 1, 5, 1, 1, 1, 1, 2, 4],
  [5, 1, 3, 1, 3, 2, 4, 2, 1],
  [3, 1, 1, 2, 4, 2, 5, 3, 5],
  [5, 2, 5, 3, 3, 4, 3, 4, 1],
  [3, 4, 4, 5, 5, 5, 5, 4, 5],
  [3, 3, 5, 5, 3, 3, 3, 5, 2],
]); // 21420
