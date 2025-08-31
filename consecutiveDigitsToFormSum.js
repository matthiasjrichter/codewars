// https://www.codewars.com/kata/5dae2599a8f7d90025d2f15f
//
// Positive integers have so many gorgeous features. Some of them could be expressed as a sum of two or more consecutive positive numbers.
//
// Consider an Example :
// 10 could be expressed as the sum of 1 + 2 + 3 + 4 .
// Task
// Given Positive integer, N , return true if it could be expressed as a sum of two or more consecutive positive numbers , otherwise return false .
//
// Notes
// Guaranteed constraint : 2 ≤ N ≤ (2^32) -1 .
// Input >> Output Examples:
//
// * consecutiveDucks(9)  ==>  return (true)  //  9 , could be expressed as a sum of ( 2 + 3 + 4 ) or ( 4 + 5 ) .
//
// * consecutiveDucks(64)  ==>  return (false)
//
// * consecutiveDucks(42)  ==>  return (true) //  42 , could be expressed as a sum of ( 9 + 10 + 11 + 12 )  .
//
// function consecutiveDucks(num) {
//   // your code here
// }

// A number can be expressed as a sum of consecutive ints unless it’s a power of 2:
const consecutiveDucks = (n) => !Number.isInteger(Math.log2(n));

// n & (n - 1) removes the lowest set bit from n.
// If result is not zero, then n had more than one bit set → it's not a power of two.
const consecutiveDucks = (n) => n & (n - 1) !== 0;

// Converting to Boolean with !!
const consecutiveDucks = (n) => !!(n & (n - 1));

// Now getting super clever by using shorthand --n for n - 1
const consecutiveDucks = (n) => !!(n & --n);