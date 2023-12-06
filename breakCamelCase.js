// https://www.codewars.com/kata/5208f99aee097e6552000148
//
// Complete the solution so that the function will break up camel casing, using a space between words.
//
// Example
// "camelCasing"  =>  "camel Casing"
// "identifier"   =>  "identifier"
// ""             =>  ""
//
// // complete the function
// function solution(string) {
//
// }

// complete the function
function solution(string) {
  let arr = string.split("");
  return arr.map((e) => (e.toUpperCase() === e ? " " + e.toUpperCase() : e)).join("");
}

//arrow function and template literal
const solution = (string) => [...string].map((e) => (e.toUpperCase() === e ? " " + e.toUpperCase() : e)).join("");

//test
solution("camelCasing"); // "camel Casing"
