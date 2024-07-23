// https://www.codewars.com/kata/5a55f04be6be383a50000187
//
// Definition
// A number is a Special Number if it’s digits only consist 0, 1, 2, 3, 4 or 5
//
// Given a number determine if it special number or not .
//
// Warm-up (Highly recommended)
// Playing With Numbers Series
// Notes
// The number passed will be positive (N > 0) .
//
// All single-digit numbers within the interval [1:5] are considered as special number.
//
// Input >> Output Examples
// specialNumber(2) ==> return "Special!!"
// Explanation:
// It's a single-digit number within the interval [1:5] .
//
// specialNumber(9) ==> return "NOT!!"
// Explanation:
// Although, it's a single-digit number but Outside the interval [1:5] .
//
// specialNumber(23) ==> return "Special!!"
// Explanation:
// All the number's digits formed from the interval [0:5] digits .
//
// specialNumber(39) ==> return "NOT!!"
// Explanation:
// Although, there is a digit (3) Within the interval But the second digit is not (Must be ALL The Number's Digits ) .
//
// specialNumber(59) ==> return "NOT!!"
// Explanation:
// Although, there is a digit (5) Within the interval But the second digit is not (Must be ALL The Number's Digits ) .
//
// specialNumber(513) ==> return "Special!!"
// specialNumber(709) ==> return "NOT!!"
//
// function specialNumber(n){
//     //your code here
//   }

// input n is an is an integer
// if it only consists of digits 0 - 5 return "Special!!". Else return "NOT!!"
// specialNumber(513) ==> return "Special!!"
// specialNumber(709) ==> return "NOT!!"
//
// convert number into string
// create lookup string "6789"
// loop through string and check if lookup string includes current digit. Yes? Return "NOT!!"
// after loop return "Special!!"
// alternative: RegExp test if string includes 6-9

//loop
function specialNumber(n) {
  let lookup = "6789";
  let str = n + "";
  for (let int of str) {
    if (lookup.includes(int)) return "NOT!!";
  }
  return "Special!!";
}

//RegExp, arrow function, ternary
const specialNumber = (n) => /[6-9]/.test(n) ? "NOT!!" : "Special!!";

//test
specialNumber(59); //return "NOT!!"
