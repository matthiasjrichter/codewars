// https://www.codewars.com/kata/59a8570b570190d313000037
//
// Write a function that takes a positive integer n, sums all the cubed values from 1 to n (inclusive), and returns that sum.
//
// Assume that the input n will always be a positive integer.
//
// Examples: (Input --> output)
//
// 2 --> 9 (sum of the cubes of 1 and 2 is 1 + 8)
// 3 --> 36 (sum of the cubes of 1, 2, and 3 is 1 + 8 + 27)
//
// function sumCubes(n){
//   // ...
// }

//while loop
function sumCubes(n) {
  let count = 1;
  let result = 0;
  while (count < n) {
    result += count ** 3;
    count++;
  }
  return result;
}

//for loop
function sumCubes(n) {
  let result = 0;
  for (let i = 1; i <= n; i++) {
    result += i ** 3;
  }
  return result;
}

//recursion
function sumCubes(n) {
  if (n === 1) {
    return 1;
  } else {
    return n ** 3 + sumCubes(n - 1);
  }
}

//test
sumCubes(3); // 36
