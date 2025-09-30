// https://www.codewars.com/kata/56b58d11e3a3a7cade000792
// 
// Sexy primes are pairs of two primes that are 6 apart. In this kata, your job is to complete the function which returns true if x & y are sexy, false otherwise.
// 
// Examples
// 5, 11   -->  true
// 61, 67  -->  true
// 7, 13   -->  true
// 5, 7    -->  false
// 1, 7    -->  false  (1 is not a prime)
// Note: x & y are always positive integers, but they are not always in order of precendence... For example you can be given either (5, 11) or (11, 5) - both are valid.
// 
// function sexyPrime(x, y){
//   
// }


const isPrime = (n) => {
  if (n <= 1) return false;
  if (n === 2) return true;
  if (n % 2 === 0) return false;
  for (let i = 3; i <= Math.sqrt(n); i += 2) if (n % i === 0) return false;
  return true;
};

const sexyPrime = (x, y) => isPrime(x) && isPrime(y) && Math.abs(y - x) === 6;