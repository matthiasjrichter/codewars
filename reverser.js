// https://www.codewars.com/kata/58069e4cf3c13ef3a6000168
//
// Impliment the reverse function, which takes in input n and reverses it. For instance, reverse(123) should return 321. You should do this without converting the inputted number into a string.
//
// // Please do not use
// const forbidden = "
//                   '
//                   `
//                   string
//                   fixed
//                   precision
//                   .keys
//
// function reverse(n){
//   // your code here
// }

// while-loop
function reverse(n) {
  let result = 0;
  while (n) {
    result = result * 10 + (n % 10);
    n = Math.trunc(n / 10);
  }
  return result;
}

// Recursion
function reverse(n, result = 0) {
  if (n) return reverse(Math.trunc(n / 10), result * 10 + (n % 10));
  else return result;
}

// Arrow function and ternary
const reverse = (n, res = 0) => n ? reverse(Math.trunc(n / 10), res * 10 + n % 10) : res;