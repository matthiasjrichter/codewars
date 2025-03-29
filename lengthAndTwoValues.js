// https://www.codewars.com/kata/62a611067274990047f431a8
//
// Given an integer n and two other values, build an array of size n filled with these two values alternating.
//
// Examples
// 5, true, false     -->  [true, false, true, false, true]
// 10, "blue", "red"  -->  ["blue", "red", "blue", "red", "blue", "red", "blue", "red", "blue", "red"]
// 0, "one", "two"    -->  []
// Good luck!
//
// function alternate(n, firstValue, secondValue){
//     // your code
//   }

// While loop
function alternate(n, firstValue, secondValue) {
  let result = [];
  let i = 0;
  while (n > 0) {
    if (i % 2 === 0) result.push(firstValue);
    else result.push(secondValue);
    i++;
    n--;
  }
  return result;
}

// For Loop
function alternate(n, firstValue, secondValue) {
  let result = [];
  for (let i = 0; i < n; i++) {
    if (i % 2 === 0) result.push(firstValue);
    else result.push(secondValue);
  }
  return result;
}

// More concise with ternary
function alternate(n, firstValue, secondValue) {
  let result = [];
  for (let i = 0; i < n; i++)
    result.push(i % 2 === 0 ? firstValue : secondValue);
  return result;
}

// Arrow function and even more concise becasue 0 is falsy
const alternate = (n, firstValue, secondValue) => {
  let result = [];
  for (let i = 0; i < n; i++) result.push(i % 2 ? secondValue : firstValue);
  return result;
};

// Array.from() is robably best here.
const alternate = (n, firstValue, secondValue) => Array.from({ length: n }, (_, i) => (i % 2 ? secondValue : firstValue));
