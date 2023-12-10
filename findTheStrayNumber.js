// https://www.codewars.com/kata/57f609022f4d534f05000024/javascript
//
// You are given an odd-length array of integers, in which all of them are the same, except for one single number.
//
// Complete the method which accepts such an array, and returns that single different number.
//
// The input array will always be valid! (odd-length >= 3)
//
// Examples
// [1, 1, 2] ==> 2
// [17, 17, 3, 17, 17, 17, 17] ==> 3
//
// function stray(numbers) {
//     return 0;
//   }

function stray(numbers) {
  let sorted = numbers.sort((a, b) => a - b);
  if (sorted[0] !== sorted[1]) return sorted[0];
  else return sorted[sorted.length - 1];
}

//ternary
function stray(numbers) {
  let sorted = numbers.sort();
  return sorted[0] !== sorted[1] ? sorted[0] : sorted[sorted.length - 1];
}

//find()
const stray = (numbers) => numbers.find((e) => numbers.indexOf(e) === numbers.lastIndexOf(e));

//test
stray([17, 17, 3, 17, 17, 17, 17]); // ==> 3
