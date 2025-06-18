// https://www.codewars.com/kata/55de6173a8fbe814ee000061
//
// Given a varying number of integer arguments, return the digits that are not present in any of them.
//
// Example:
//
// [12, 34, 56, 78]  =>  "09"
// [2015, 8, 26]     =>  "3479"
// Note: the digits in the resulting string should be sorted.
//
// function unusedDigits() {
//   return "";
// }

// If-statements
function unusedDigits(...args) {
  let str = args.toString();
  let result = "";
  if (!str.includes("0")) result += "0";
  if (!str.includes("1")) result += "1";
  if (!str.includes("2")) result += "2";
  if (!str.includes("3")) result += "3";
  if (!str.includes("4")) result += "4";
  if (!str.includes("5")) result += "5";
  if (!str.includes("6")) result += "6";
  if (!str.includes("7")) result += "7";
  if (!str.includes("8")) result += "8";
  if (!str.includes("9")) result += "9";
  return result;
}

// For of loop
function unusedDigits(...args) {
  let str = args.toString();
  let digits = "0123456789";
  let result = "";
  for (let d of digits) {
    if (!str.includes(d)) result += d;
  }
  return result;
}

// .filter
const unusedDigits = (...args) => [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].filter(d => !args.join("").includes(d)).join("");


// Test
unusedDigits(12, 34, 56, 78); // "09"