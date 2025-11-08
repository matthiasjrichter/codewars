// https://www.codewars.com/kata/51675d17e0c1bed195000001
//
// In the following 6 digit number:
//
// 283910
// 91 is the greatest sequence of 2 consecutive digits.
//
// In the following 10 digit number:
//
// 1234567890
// 67890 is the greatest sequence of 5 consecutive digits.
//
// Complete the solution so that it returns the greatest sequence of five consecutive digits found within the number given. The number will be passed in as a string of only digits. It should return a five digit integer. The number passed may be as large as 1000 digits.
//
// Adapted from ProjectEuler.net
//
// function solution(digits){
//
// }

function solution(digits) {
  let str = String(digits);
  let largest = 0;
  for (let i = 0; i < str.length; i++) {
    let current = +str.slice(i, i + 5);
    if (current > largest) largest = current;
  }
  return largest;
}

// A tiny bit more efficient
function solution(digits) {
  let str = String(digits);
  let largest = "00000";
  for (let i = 0; i < str.length - 4; i++) {
    let current = str.slice(i, i + 5);
    if (current > largest) largest = current;
  }
  return +largest;
}

// Optimization by checking first digit
function solution(digits) {
  let str = String(digits);
  let largest = "00000";
  for (let i = 0; i < str.length - 4; i++) {
    if (str[i] >= largest[0]) {
      let current = str.slice(i, i + 5);
      if (current > largest) largest = current;
    }
  }
  return +largest;
}

// Some syntactic sugar for fun
const solution = (digits) => {
  let [str, largest] = [digits + "", "00000"];
  for (let i = 0; i < str.length - 4; i++) {
    if (str[i] >= largest[0]) {
      const current = str.slice(i, i + 5);
      if (current > largest) largest = current;
    }
  }
  return +largest;
};
