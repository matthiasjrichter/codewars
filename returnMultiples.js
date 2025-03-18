// https://www.codewars.com/kata/593c9175933500f33400003e
//
// Implement a function that takes two numbers m and n and returns an array of the first m multiples of the real number n. Assume that m is a positive integer.
//
// Ex.
//
// (3, 5.0) --> [5.0, 10.0, 15.0]
//
// function multiples(m, n){
//     // code here
//   }

function multiples(m, n) {
  let result = [];
  let current = n;
  while (m) {
    result.push(current);
    current += n;
    m--;
  }
  return result;
}

// alternative
const multiples = (m, n) => Array.from({ length: m }, (_, i) => (i + 1) * n);