// https://www.codewars.com/kata/51dda84f91f5b5608b0004cc
//
// Write a function that takes an integer and returns an array [A, B, C], where A is the number of multiples of 3 (but not 5) below the given integer, B is the number of multiples of 5 (but not 3) below the given integer and C is the number of multiples of 3 and 5 below the given integer.
//
// For example, solution(20) should return [5, 2, 1]
//
// function solution(number){
//
// }

// while-loop
function solution(number) {
  let fizz = 0, buzz = 0, fizzbuzz = 0;
  number--
  while (number) {
    if (!(number % 3) && !(number % 5)) fizzbuzz++;
    else if (!(number % 3)) fizz++;
    else if (!(number % 5)) buzz++;
    number--;
  }
  return [fizz, buzz, fizzbuzz];
}

// for-loop
function solution(number) {
  let fizz = 0, buzz = 0, fizzbuzz = 0;
  for (let i = 1; i < number; i++) {
    if (!(i % 15)) fizzbuzz++;
    else if (!(i % 3)) fizz++;
    else if (!(i % 5)) buzz++;
  }
  return [fizz, buzz, fizzbuzz];
}

// Math approach
function solution(number) {
  number--;
  const fizz = Math.trunc(number / 3) - Math.trunc(number / 15);
  const buzz = Math.trunc(number / 5) - Math.trunc(number / 15);
  const fizzbuzz = Math.trunc(number / 15);
  return [fizz, buzz, fizzbuzz];
}


// Test
solution(20) // [5, 2, 1]