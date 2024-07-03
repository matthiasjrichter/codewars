// https://www.codewars.com/kata/53d32bea2f2a21f666000256
//
// Write a program that outputs the top n elements from a list.
//
// Example:
//
// largest(2, [7,6,5,4,3,2,1])
// // => [6,7]
//
// function largest(n, array) {
//     // Find the n highest elements in a list
//     return [];
//   }

//while loop
function largest(n, array) {
  let result = [];
  array.sort((a, b) => b - a);
  while (n > 0) {
    result.unshift(array[0]);
    array.shift();
    n--;
  }
  return result;
}

//slice
const largest = (n, array) => array.sort((a,b)=>b-a).slice(0, n).reverse();
//tests
largest(2, [7, 6, 5, 4, 3, 2, 1]); // => [6,7]
largest(2, [-3, -2, -1, 0, -9, -8, -7, -6, -4, -5]); // [-1, +0])
