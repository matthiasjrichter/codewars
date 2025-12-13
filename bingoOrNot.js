// https://www.codewars.com/kata/5a1ee4dfffe75f0fcb000145
//
// For this game of BINGO, you will receive a single array of 10 numbers from 1 to 26 as an input. Duplicate numbers within the array are possible.
//
// Each number corresponds to their alphabetical order letter (e.g. 1 = A. 2 = B, etc). Write a function where you will win the game if your numbers can spell "BINGO". They do not need to be in the right order in the input array. Otherwise you will lose. Your outputs should be "WIN" or "LOSE" respectively.
//
// function bingo(a) {
//   // your winning code here
// }

// for of loop
function bingo(a) {
  const bingoArr = [2, 9, 14, 7, 15];
  const aSet = new Set(a);
  for (const n of bingoArr) {
    if (!aSet.has(n)) return "LOSE";
  }
  return "WIN";
}

// .every()
function bingo(a) {
  const bingoArr = [2, 9, 14, 7, 15];
  const aSet = new Set(a);
  if (bingoArr.every((n) => aSet.has(n))) return "WIN";
  return "LOSE";
}

// Arrow function and Ternary
const bingo = a => [2, 9, 14, 7, 15].every((n) => new Set(a).has(n)) ? "WIN" : "LOSE";

// Correct but not woking on codewars, because .isSubsetOf() isn't available in Node v18
const bingo = a => new Set([2, 9, 14, 7, 15]).isSubsetOf(new Set(a)) ? "WIN" : "LOSE";
