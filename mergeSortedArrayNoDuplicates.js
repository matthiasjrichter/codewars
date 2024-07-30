// https://www.codewars.com/kata/573f5c61e7752709df0005d2
// 
// Write a function that merges two sorted arrays into a single one. The arrays only contain integers. Also, the final outcome must be sorted and not have any duplicate.
// 
// function mergeArrays(a, b) {
//     // your code here
//   }
//   

const mergeArrays = (arr1, arr2) => [...new Set([...arr1, ...arr2])].sort((a, b) => a - b);
  