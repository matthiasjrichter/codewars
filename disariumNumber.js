// Definition
// Disarium number is the number that The sum of its digits powered with their respective positions is equal to the number itself.
//
// Task
// Given a number, Find if it is Disarium or not .
//
// Warm-up (Highly recommended)
// Playing With Numbers Series
// Notes
// Number passed is always Positive .
// Return the result as String
// Input >> Output Examples
// disariumNumber(89) ==> return "Disarium !!"
// Explanation:
// Since , 81 + 92 = 89 , thus output is "Disarium !!"
// disariumNumber(564) ==> return "Not !!"
// Explanation:
// Since , 51 + 62 + 43 = 105 != 564 , thus output is "Not !!"
//
// function disariumNumber(n){
//     //your code here
//   }

function disariumNumber(n) {
  let arr = (n + "").split("");
  if (arr.map((e, i) => e ** (i + 1)).reduce((a, c) => a + c, 0) === n) return "Disarium !!";
  return "Not !!";
}

//alternative
function disariumNumber(n) {
  let sum = String(n).split("").reduce((a, c, i) => a + Math.pow(Number(c), i + 1), 0);
  return sum === n ? "Disarium !!" : "Not !!";
}

//one line for fun
const disariumNumber = (n) => String(n).split("").reduce((a, c, i) => a + Math.pow(Number(c), i + 1), 0) === n ? "Disarium !!" : "Not !!";

//test
disariumNumber(89); //"Disarium !!"
