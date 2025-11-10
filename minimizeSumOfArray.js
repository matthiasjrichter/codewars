// https://www.codewars.com/kata/5a523566b3bfa84c2e00010b/
//
// Introduction and Warm-up (Highly recommended)
// Playing With Lists/Arrays Series
// Task
// Given an array of integers , Find the minimum sum which is obtained from summing each Two integers product .
//
// Notes
// Array/list will contain positives only .
// Array/list will always have even size
// Input >> Output Examples
// minSum({5,4,2,3}) ==> return (22)
// Explanation:
// The minimum sum obtained from summing each two integers product ,  5*2 + 3*4 = 22
// minSum({12,6,10,26,3,24}) ==> return (342)
// Explanation:
// The minimum sum obtained from summing each two integers product ,  26*3 + 24*6 + 12*10 = 342
// minSum({9,2,8,7,5,4,0,6}) ==> retu
//
// function minSum(arr) {
//   // your code here
// }

function minSum(arr) {
  let sorted = [...arr].sort((a, b) => b - a);
  let products = [];
  while (sorted.length) {
    products.push(sorted.shift() * sorted.pop());
  }
  return products.reduce((a, c) => a + c, 0);
}

// Alternative
function minSum(arr) {
  let sorted = [...arr].sort((a, b) => b - a);
  let products = [];
  for (let i = 0; i < sorted.length / 2; i++) {
    products.push(sorted.at(i) * sorted.at(-(i + 1)));
  }
  return products.reduce((a, c) => a + c, 0);
}

// More efficient
function minSum(arr) {
  let sorted = [...arr].sort((a, b) => b - a);
  let sum = 0;
  for (let i = 0; i < sorted.length / 2; i++) sum += sorted.at(i) * sorted.at(-(i + 1));
  return sum;
}