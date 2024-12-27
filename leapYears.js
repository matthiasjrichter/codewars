// https://www.codewars.com/kata/526c7363236867513f0005ca
//
// In this kata you should simply determine, whether a given year is a leap year or not. In case you don't know the rules, here they are:
//
// Years divisible by 4 are leap years,
// but years divisible by 100 are not leap years,
// but years divisible by 400 are leap years.
// Tested years are in range 1600 ≤ year ≤ 4000.
//
// function isLeapYear(year) {
//     // TODO
//   }

function isLeapYear(year) {
  let result = false;
  if (year % 4 === 0) result = true;
  if (year % 100 === 0) result = false;
  if (year % 400 === 0) result = true;
  return result;
}

// without a variable to store the result it is faster due to early returns
function isLeapYear(year) {
  if (year % 400 === 0) return true;
  if (year % 100 === 0) return false;
  if (year % 4 === 0) return true;
  return false;
}

// more concise
function isLeapYear(year) {
  if (!(year % 400)) return true;
  if (!(year % 100)) return false;
  if (!(year % 4)) return true;
  return false;
}

// one line for fun
const isLeapYear = (year) => (year % 400 === 0) || (year % 100 !== 0 && year % 4 === 0);
