// https://www.codewars.com/kata/53daa9e5af55c184db00025f/
//
// In this kata you will create a function to check a non-negative input to see if it is a prime nber.
//
// The function will take in a nber and will return True if it is a prime nber and False if it is not.
//
// A prime nber is a natural nber greater than 1 that has no positive divisors other than 1 and itself.
//
// Examples(input --> output)
// 0 --> false
// 1 --> false
// 2 --> true
// 11 --> true
// 12 --> false
//
// function isPrime(n) {
//   // show me the code!
// }

function isPrime(n) {
  if (n <= 1) return false;
  for (let i = 2; i * i <= n; i++) if (!(n % i)) return false;
  return true;
}
