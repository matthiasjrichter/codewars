// https://www.codewars.com/kata/57ad85bb7cb1f3ae7c000039
//
// You have to search all numbers from inclusive 1 to inclusive a given number x, that have the given digit d in it.
// The value of d will always be 0 - 9.
// The value of x will always be greater than 0.
//
// You have to return as an array
//
// the count of these numbers,
// their sum
// and their product.
//
// For example:
// x = 11
// d = 1
// ->
// Numbers: 1, 10, 11
// Return: [3, 22, 110]
//
// If there are no numbers, which include the digit, return [0,0,0].
//
// Have fun coding it and please don't forget to vote and rank this kata! :-)
//
// I have created other katas. Have a look if you like coding and challenges.
//
// function numbersWithDigitInside(x, d) {
//     return [];
//   }

function numbersWithDigitInside(x, d) {
  let result = [];
  for (let i = 1; i <= x; i++) {
    if (String(i).includes(String(d))) result.push(i);
  }
  if ((result.length = 0)) return [0, 0, 0];
  let count = result.length;
  let sum = result.reduce((a, c) => a + c, 0);
  let product = result.reduce((a, c) => a * c, 1);
  return [count, sum, product];
}

// more efficient with a single loop
function numbersWithDigitInside(x, d) {
  let count = 0;
  let sum = 0;
  let product = 1;
  for (let i = 1; i <= x; i++) {
    if (String(i).includes(String(d))) {
      count++;
      sum += i;
      product *= i;
    }
  }
  if (!count) return [0, 0, 0];
  return [count, sum, product];
}

// Test
numbersWithDigitInside(11, 1); // [3, 22, 110]
