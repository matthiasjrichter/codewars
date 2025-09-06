// https://www.codewars.com/kata/5a662a02e626c54e87000123/
//
// Definition
// An extra perfect number is a positive integer whose first and last bits in binary representation are set (i.e., both are 1).
//
// Task
// Given a positive integer N, return all the extra perfect numbers in the range from 1 to N, inclusive.
//
// function extraPerfect(n){
//   //your code here
// }

function extraPerfect(n) {
  let result = [];
  for (let i = 1; i <= n; i++) if (i % 2) result.push(i);
  return result;
}

// Better:
function extraPerfect(n) {
  let result = [];
  for (let i = 1; i <= n; i += 2) result.push(i);
  return result;
}

// Alternative
const extraPerfect = (n) => Array.from({ length: n + 1 }, (_, i) => i).filter((e) => e % 2);

// Very Math-y approach
const extraPerfect = (n) => Array.from({ length: Math.ceil(n / 2) }, (_, i) => 2 * i + 1);