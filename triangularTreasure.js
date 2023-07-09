// https://www.codewars.com/kata/525e5a1cb735154b320002c8/train/javascript
// Triangular numbers are so called because of the equilateral triangular shape that they occupy when laid out as dots. i.e.
// 
// 1st (1)   2nd (3)    3rd (6)
// *          **        ***
//            *         **
//                      *
// You need to return the nth triangular number. You should return 0 for out of range values:
// 
// For example: (Input --> Output)
// 
// 0 --> 0
// 2 --> 3
// 3 --> 6
// -10 --> 0

// The formula for calculating the nth triangular number is: T = (n)(n + 1) / 2
function triangular(n) {
  if(n <= 0) return 0
  else return (n) * (n + 1) / 2
}
  
// without knowing the formula we can use a for loop
// this can time out for very large numbers!
function triangular(n) {
  if (n <= 0) return 0

  let result = 0;
  for (let i = 1; i <= n; i++) {
    result += i
  }
  
  return result
}