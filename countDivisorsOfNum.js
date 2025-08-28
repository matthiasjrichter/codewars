// https://www.codewars.com/kata/542c0f198e077084c0000c2e
//
// Count the number of divisors of a positive integer n.
//
// Random tests go up to n = 500000, but fixed tests go higher.
//
// Examples (input --> output)
// 4 --> 3 // we have 3 divisors - 1, 2 and 4
// 5 --> 2 // we have 2 divisors - 1 and 5
// 12 --> 6 // we have 6 divisors - 1, 2, 3, 4, 6 and 12
// 30 --> 8 // we have 8 divisors - 1, 2, 3, 5, 6, 10, 15 and 30
// Note you should only return a number, the count of divisors. The numbers between parentheses are shown only for you to see which numbers are counted in each case.
//
// function getDivisorsCnt(n){
//     // todo
// }

// This works but times out on big numbers, so the kata fails:
function getDivisorsCnt(n) {
  let count = 0;
  for (let i = 1; i <= n; i++) {
    if (n % i === 0) count++;
  }
  return count;
}

// Optimization:
function getDivisorsCnt(n) {
  let count = 1;
  let remaining = n;

  let exponent = 0;
  while (remaining % 2 === 0) {
    exponent++;
    remaining /= 2;
  }
  count *= exponent + 1;

  let factor = 3;
  while (factor * factor <= remaining) {
    exponent = 0;
    while (remaining % factor === 0) {
      exponent++;
      remaining /= factor;
    }
    count *= exponent + 1;
    factor += 2;
  }

  if (remaining > 1) count *= 2;

  return count;
}
