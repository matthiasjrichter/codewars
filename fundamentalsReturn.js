// https://www.codewars.com/kata/55a5befdf16499bffb00007b/train/javascript
//
// Make multiple functions that will return the sum, difference, modulus, product, quotient, and the exponent respectively.
//
// Please use the following function names:
//
// addition = add
//
// multiply = multiply
//
// division = divide (both integer and float divisions are accepted)
//
// modulus = mod
//
// exponential = exponent
//
// subtraction = subt
//
// Note: All math operations will be: a (operation) b
//
// function add(a,b){
//   return
// }
//
// function divide(a,b){
//   return
// }
//
// function multiply(a,b){
//   return
// }
//
// function mod(a,b){
//   return
// }
//
// function exponent(a,b){
//   return
// }
//
// function subt(a,b){
//   return
// }

function add(a, b) {
  return a + b;
}

function divide(a, b) {
  return a / b;
}

function multiply(a, b) {
  return a * b;
}

function mod(a, b) {
  return a % b;
}

function exponent(a, b) {
  return a ** b;
}

function subt(a, b) {
  return a - b;
}

//alternative
const add = (a, b) => a + b;
const subt = (a, b) => a - b;
const divide = (a, b) => a / b;
const multiply = (a, b) => a * b;
const mod = (a, b) => a % b;
const exponent = (a, b) => a ** b;
