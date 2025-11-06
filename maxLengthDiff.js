// https://www.codewars.com/kata/5663f5305102699bad000056
//
// You are given two arrays a1 and a2 of strings. Each string is composed with letters from a to z. Let x be any string in the first array and y be any string in the second array.
//
// Find max(abs(length(x) − length(y)))
//
// If a1 and/or a2 are empty return -1 in each language except in Haskell (F#) where you will return Nothing (None).
//
// Example:
// a1 = ["hoqq", "bbllkw", "oox", "ejjuyyy", "plmiis", "xxxzgpsssa", "xxwwkktt", "znnnnfqknaz", "qqquuhii", "dvvvwz"]
// a2 = ["cccooommaaqqoxii", "gggqaffhhh", "tttoowwwmmww"]
// mxdiflg(a1, a2) --> 13
// Bash note:
// input : 2 strings with substrings separated by ,
// output: number as a string
//
// function mxdiflg(a1, a2) {
//     // your code
// }

function mxdiflg(a1, a2) {
    if (!a1.length || !a2.length) return -1;
    let [a1Lengths, a2Lengths] = [a1.map((e) => e.length), a2.map((e) => e.length)]
    let [a1Min, a1Max, a2Min, a2Max] = [Math.min(...a1Lengths), Math.max(...a1Lengths), Math.min(...a2Lengths), Math.max(...a2Lengths)];
    return Math.max(a1Max - a2Min, a2Max - a1Min);
}

// More efficient with helper function
const findMinMax = (a) => {
  let [min, max] = [a[0].length, a[0].length];
  for (let str of a) {
    let currentLength = str.length;
    if (currentLength < min) min = currentLength;
    if (currentLength > max) max = currentLength;
  }
  return [min, max]
};

function mxdiflg(a1, a2) {
    if (!a1.length || !a2.length) return -1;
    let [a1Min, a1Max] = findMinMax(a1);
    let [a2Min, a2Max] = findMinMax(a2);
    return Math.max(a1Max - a2Min, a2Max - a1Min);
}

// Alternative
const findMinMax = (a) => {
  let [min, max] = [a[0].length, a[0].length];
  for (let { length } of a) {
    if (length < min) min = length;
    else if (length > max) max = length;
  }
  return [min, max];
};

function mxdiflg(a1, a2) {
    if (!a1.length || !a2.length) return -1;
    let [[a1Min, a1Max], [a2Min, a2Max]] = [findMinMax(a1), findMinMax(a2)];
    return Math.max(a1Max - a2Min, a2Max - a1Min);
}