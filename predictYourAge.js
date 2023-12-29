// https://www.codewars.com/kata/5aff237c578a14752d0035ae
//
// My grandfather always predicted how old people would get, and right before he passed away he revealed his secret!
//
// In honor of my grandfather's memory we will write a function using his formula!
//
// Take a list of ages when each of your great-grandparent died.
// Multiply each number by itself.
// Add them all together.
// Take the square root of the result.
// Divide by two.
// Example
// predictAge(65, 60, 75, 55, 60, 63, 64, 45) === 86
// Note: the result should be rounded down to the nearest integer.
//
// Some random tests might fail due to a bug in the JavaScript implementation. Simply resubmit if that happens to you.
//
// function predictAge(age1,age2,age3,age4,age5,age6,age7,age8){
//   // your code
// }

//////////
//multiply each element by itself
//add them all together (reduce())
//divide sqrt of result by 2

function predictAge(age1, age2, age3, age4, age5, age6, age7, age8) {
  let arr = Array.from(arguments);
  let result = arr.reduce((a, c) => a + c * c, 0);
  result = Math.sqrt(result) / 2;
  return Math.floor(result);
}

//alternative
const predictAge = (...ages) => Math.floor(Math.sqrt(ages.reduce((a, c) => a + c * c, 0)) / 2);

//test
predictAge(65, 60, 75, 55, 60, 63, 64, 45); // 86
