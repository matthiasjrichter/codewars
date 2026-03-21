// https://www.codewars.com/kata/5a05fe8a06d5b6208e00010b
//
// Description:
// Task
// Given the number n, return the sequence of numbers from n to 1.
//
//
// Range
// The number n can be negative and also large number:  -9999  <=  n  <=  9999
//
//
// Examples
// n =  5    >>     5, 4, 3, 2, 1
// n = -1    >>    -1, 0, 1
//
// function seqToOne(n){
//   //your code here
// }

function seqToOne(n) {
  const result = [];
  if (n > 1) for (let i = n; i >= 1; i--) result.push(i);
  else for (let i = n; i <= 1; i++) result.push(i);
  return result;
}

// More DRY
function seqToOne(n) {
  const result = [], step = n > 1 ? -1 : 1;
  for (let i = n; i !== 1 + step; i += step) result.push(i);
  return result;
}