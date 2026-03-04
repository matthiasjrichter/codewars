// https://www.codewars.com/kata/5784c89be5553370e000061b
//
// Rick wants a faster way to get the product of the largest pair in an array. Your task is to create a performant solution to find the product of the largest two integers in an array of positive numbers.
//
// Rick is only interested in solutions that are faster than his, which has a running time of O(n log n).
//
// [2, 6, 3]                      => 18 = 6 * 3
// [2, 1, 5, 0, 4, 3]             => 20 = 5 * 4
// [7, 8, 9]                      => 72 = 8 * 9
// [33, 231, 454, 11, 9, 99, 57]  => 104874 = 231 * 454
//
// function maxProduct(a) {
//   // ...
// }

function maxProduct(a) {
  let max1 = -Infinity, max2 = -Infinity;
  
  for (const num of a) {
    if (num > max1) {
      max2 = max1;
      max1 = num;
    } else if (num > max2) {
      max2 = num;
    }
  }
  
  return max1 * max2;
}