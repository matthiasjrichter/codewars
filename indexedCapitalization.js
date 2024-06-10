// https://www.codewars.com/kata/59cfc09a86a6fdf6df0000f1
//
// Given a string and an array of integers representing indices, capitalize all letters at the given indices.
//
// For example:
//
// capitalize("abcdef",[1,2,5]) = "aBCdeF"
// capitalize("abcdef",[1,2,5,100]) = "aBCdeF". There is no index 100.
// The input will be a lowercase string with no spaces and an array of digits.
//
// Good luck!
//
// function capitalize(s,arr){
//     return "";
//   };

//if arr includes index, replace with to uppercase

function capitalize(s, arr) {
  let sArr = s.split("");
  let result = "";
  sArr.forEach((e, i) => {
    if (arr.includes(i)) result += e.toUpperCase();
    else result += e;
  });
  return result;
}

//ternary and destructuring
function capitalize(s, arr) {
  let result = "";
  [...s].forEach((e, i, a) => arr.includes(i) ? result += e.toUpperCase() : result += e);
  return result;
}

//one line for fun
const capitalize = (s, arr) => [...s].map((e,i) => arr.includes(i) ? e.toUpperCase() : e).join("");

//test
capitalize("abcdef", [1, 2, 5, 100]); //
