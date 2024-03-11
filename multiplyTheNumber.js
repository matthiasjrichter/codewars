// https://www.codewars.com/kata/5708f682c69b48047b000e07
//
// Jack really likes his number five: the trick here is that you have to multiply each number by 5 raised to the number of digits of each numbers, so, for example:
//
//   3 -->    15  (  3 * 5¹)
//  10 -->   250  ( 10 * 5²)
// 200 --> 25000  (200 * 5³)
//   0 -->     0  (  0 * 5¹)
//  -3 -->   -15  ( -3 * 5¹)
//
//  function multiply(number){
//     //your code here
//   }

function multiply(number) {
  return number * Math.pow(5, String(Math.abs(number)).length);
}

//alternative
const multiply = (number) => number * 5 ** (Math.abs(number) + "").length;

//tests
multiply(10); // 250
multiply(-3); // -15