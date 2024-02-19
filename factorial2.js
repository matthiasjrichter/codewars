// https://www.codewars.com/kata/57a049e253ba33ac5e000212/
//
// Your task is to write function factorial.
//
// https://en.wikipedia.org/wiki/Factorial
//
// function factorial(n){
//     //your code here
//   }

//while loop
function factorial(n) {
  if (n === 0) return 1;
  let count = 1;
  let fac = 1;
  while (count <= n) {
    fac *= count;
    count++;
  }
  return fac;
}

//for loop
function factorial(n) {
  if (n === 0) return 1;
  let fac = 1;
  for (i = 1; i <= n; i++) {
    fac *= i;
  }
  return fac;
}

//recursion
function factorial(n) {
  if (n === 0) return 1;
  return n * factorial(n - 1);
}

//recursion arrow function and ternary operator
const factorial = (n) => n ? factorial(n - 1) * n : 1;
