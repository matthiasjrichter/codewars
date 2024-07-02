// https://www.codewars.com/kata/5a262cfb8f27f217f700000b
//
// In this Kata, you will be given two strings a and b and your task will be to return the characters that are not common in the two strings.
//
// For example:
//
// solve("xyab","xzca") = "ybzc"
// --The first string has 'yb' which is not in the second string.
// --The second string has 'zc' which is not in the first string.
// Notice also that you return the characters from the first string concatenated with those from the second string.
//
// More examples in the tests cases.
//
// Good luck!
//
// function solve(a,b){
//     //..
//    };

function solve(a, b) {
  let result = "";
  for (let char of a) {
    if (!b.includes(char)) result += char;
  }
  for (let char of b) {
    if (!a.includes(char)) result += char;
  }
  return result;
}

//filter
const solve = (a, b) =>[...a, ...b].filter((char) => !a.includes(char) || !b.includes(char)).join("");

//test
solve("xyab", "xzca"); // "ybzc"
