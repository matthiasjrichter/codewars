// https://www.codewars.com/kata/544aed4c4a30184e960010f4
//
// Create a function named divisors/Divisors that takes an integer n > 1 and returns an array with all of the integer's divisors(except for 1 and the number itself), from smallest to largest. If the number is prime return the string '(integer) is prime' (null in C#, empty table in COBOL) (use Either String a in Haskell and Result<Vec<u32>, String> in Rust).
//
// Examples:
// divisors(12) --> [2, 3, 4, 6]
// divisors(25) --> [5]
// divisors(13) --> "13 is prime"
//
// function divisors(integer) {
//
// }

function divisors(integer) {
  let res = [];
  for (let i = 2; i < integer; i++) {
    if (integer % i === 0) res.push(i);
  }
  return res.length ? res : `${integer} is prime`;
}

// More concise:
function divisors(n) {
  let res = [];
  for (let i = 2; i < n; i++) if (!(n % i)) res.push(i);
  return res.length ? res : `${n} is prime`;
}

// Inefficient but fun: Arrow function,.map() and .filter()
const divisors = (n) => {
  let res = Array.from({ length: n }, (_, i) => i).filter((e) => !(n % e) && e > 1);
  return res.length ? res : `${n} is prime`;
}

// More efficient:
function divisors(n) {
  let res = [];
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (!(n % i)) {
      res.push(i);
      if (i !== n / i) res.push(n / i);
    }
  }
  return res.length ? res.sort((a, b) => a - b) : `${n} is prime`;
}