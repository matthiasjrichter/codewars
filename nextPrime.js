// https://www.codewars.com/kata/58e230e5e24dde0996000070/
//
// Get the next prime number!
//
// You will get a numbern (>= 0) and your task is to find the next prime number.
//
// Make sure to optimize your code: there will numbers tested up to about 10^12.
//
// Examples
// 5   =>  7
// 12  =>  13
//
// function nextPrime(n){
//   //have fun ^.^
// }

const isPrime = (n) => {
  if (n <= 1) return false;
  if (n <= 3) return true;
  if (n % 2 === 0 || n % 3 === 0) return false;
  for (let i = 5; i * i <= n; i += 6) if (n % i === 0 || n % (i + 2) === 0) return false;
  return true;
};

function nextPrime(n) {
  for (let i = n + 1; ; i++) if (isPrime(i)) return i;
}
