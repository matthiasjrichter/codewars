// https://www.codewars.com/kata/583ade15666df5a64e000058
//
// This kata is about converting numbers to their binary or hexadecimal representation:
//
// If a number is even, convert it to binary.
// If a number is odd, convert it to hex.
// Numbers will be positive. The hexadecimal string should be lowercased.
//
// function evensAndOdds(num){
// 	//your code here
// }

function evensAndOdds(num) {
  if (num % 2 === 0) return num.toString(2);
  return num.toString(16);
}

//arrow function and ternary
const evensAndOdds = (num) => num % 2 === 0 ? num.toString(2) : num.toString(16);

//tests
evensAndOdds(2); // 10
evensAndOdds(13); //d
