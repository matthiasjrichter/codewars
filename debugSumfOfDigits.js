// https://www.codewars.com/kata/563d59dd8e47a5ed220000ba
//
// Debug   function getSumOfDigits that takes positive integer to calculate sum of its digits. Assume that argument is an integer.
//
// Example
// 123  => 6
// 223  => 7
// 1337 => 14
//
// function getSumOfDigits(integer) {
//     var sum = null;
//     var digits =  Math.floor(integer).toString();
//     for(var ix = 1; ix < digits.length; ix = sum + 1) {
//       sum =+ digits[ix + 1]);
//     }
//     return sum;
//   }

function getSumOfDigits(integer) {
  var sum = 0;
  var digits = integer.toString();
  for (var ix = 0; ix < digits.length; ix++) {
    sum += +digits[ix];
  }
  return sum;
}

// alternative
const getSumOfDigits = (num) => [...String(num)].reduce((acc, cur) => acc + Number(cur), 0);

