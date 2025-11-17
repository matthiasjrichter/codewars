// https://www.codewars.com/kata/57be674b93687de78c0001d9/
//
// Given a positive integer N, return the largest integer k such that 3^k < N.
//
// For example,
//
// 3 --> 0
// 4 --> 1
// You may assume that the input to your function is always a positive integer.
//
// function largestPower(n){
//   return // return the largest integer k such that 3^k < n
// }

// for loop
function largestPower(n) {
  if (n === 1) return -1;
  for (let i = 0; ; i++) if (Math.pow(3, i) >= n) return i - 1;
}

// Recursion
const largestPower = (n, k = 0) => Math.pow(3, k) < n ? largestPower(n, k + 1) : k - 1;

// Multiplication is more efficient than Math.pow()
function largestPower(n) {
  if (n === 1) return -1;
  
  let power = 1, k = 0;
  
  while (power * 3 < n) {
    power *= 3;
    k++;
  }
  return k;
}
