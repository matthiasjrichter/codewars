// https://www.codewars.com/kata/57b68bc7b69bfc8209000307
//
// Create a function that returns the average of an array of numbers ("scores"), rounded to the nearest whole number. You are not allowed to use any loops (including for, for/in, while, and do/while loops).
//
// The array will never be empty.
//
// function average(scores) {
//     // code to calculate the average
// }

function average(scores) {
  let sum = scores.reduce((a, c) => a + c, 0);
  return Math.round(sum / scores.length);
}

//alternative
const average = (scores) => Math.round(scores.reduce((a, c) => a + c, 0) / scores.length);

//test
average([49, 3, 5, 300, 7]); //73
