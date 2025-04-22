// https://www.codewars.com/kata/6071ef9cbe6ec400228d9531
//
// Dot Calculator
// You have to write a calculator that receives strings for input. The dots will represent the number in the equation. There will be dots on one side, an operator, and dots again after the operator. The dots and the operator will be separated by one space.
//
// Here are the following valid operators :
//
// + Addition
// - Subtraction
// * Multiplication
// // Integer Division
// Your Work (Task)
// You'll have to return a string that contains dots, as many the equation returns. If the result is 0, return the empty string. When it comes to subtraction, the first number will always be greater than or equal to the second number.
//
// Examples (Input => Output)
// * "..... + ..............." => "...................."
// * "..... - ..."             => ".."
// * "..... - ."               => "...."
// * "..... * ..."             => "..............."
// * "..... * .."              => ".........."
// * "..... // .."             => ".."
// * "..... // ."              => "....."
// * ". // .."                 => ""
// * ".. - .."                 => ""
//
// function dotCalculator (equation) {
// 	return '...';
// }

// quick and dirty
function dotCalculator(equation) {
  let result = 0;
  if (equation.includes("+")) return equation.replace(" + ", "");
  if (equation.includes("-")) {
    let arr = equation.split(" - ");
    result = arr[0].length - arr[1].length;
  }
  if (equation.includes("*")) {
    let arr = equation.split(" * ");
    result = arr[0].length * arr[1].length;
  }
  if (equation.includes("//")) {
    let arr = equation.split(" // ");
    result = arr[0].length / arr[1].length;
  }
  return ".".repeat(result);
}

// destructuring and object to store the operations
function dotCalculator(equation) {
  const [left, operator, right] = equation.split(" ");
  const operations = {
    "+": (a, b) => a + b,
    "-": (a, b) => a - b,
    "*": (a, b) => a * b,
    "//": (a, b) => Math.floor(a / b),
  };
  const result = operations[operator](left.length, right.length);
  return ".".repeat(result);
}
