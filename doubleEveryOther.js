// https://www.codewars.com/kata/5809c661f15835266900010a
// 
// Write a function that doubles every second integer in a list, starting from the left.
// 
// Example:
// 
// For input array/list :
// 
// [1,2,3,4]
// the function should return :
// 
// [1,4,3,8]
// 
// function doubleEveryOther(a) {
//   return a;
// }

const doubleEveryOther = (a) => a.map((e, i) => i % 2 ? e * 2 : e);