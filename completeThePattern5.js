// https://www.codewars.com/kata/55749101ae1cf7673800003e
//
// Task:
// You have to write a function pattern which creates the following pattern up to n/2 number of lines.
//
// If n <= 1 then it should return "" (i.e. empty string).
// If any odd number is passed as argument then the pattern should last up to the largest even number which is smaller than the passed odd number.
// Examples:
// n = 8:
//
// 22
// 4444
// 666666
// 88888888
// n = 5:
//
// 22
// 4444
// Note: There are no spaces in the pattern.
//
// Hint: Use \n in string to jump to next line.
//
// function pattern(n){
//   let output="";
//   // Happy Coding ^_^
//   return output;
// }

function pattern(n) {
  if (n <= 1) return "";
  let output = [];
  for (let i = 0; i <= n; i += 2) output.push(String(i).repeat(i));
  return output.join("\n").trim();
}