// https://www.codewars.com/kata/5572f7c346eb58ae9c000047
//
// Task:
// You have to write a function pattern which returns the following Pattern(See Pattern & Examples) upto n number of rows.
//
// Note:Returning the pattern is not the same as Printing the pattern.
// Rules/Note:
// If n < 1 then it should return "" i.e. empty string.
// There are no whitespaces in the pattern.
// Pattern:
// 1
// 22
// 333
// ....
// .....
// nnnnnn
// Examples:
// pattern(5):
//
// 1
// 22
// 333
// 4444
// 55555
// pattern(11):
//
// 1
// 22
// 333
// 4444
// 55555
// 666666
// 7777777
// 88888888
// 999999999
// 10101010101010101010
// 1111111111111111111111
// Hint: Use \n in string to jump to next line
//
// function pattern(n){
//  var output="";
//    // Happy Coding ^_^
//  return output;
// }

function pattern(n) {
  if (n < 1) return "";
  let output = "1";
  for (let i = 2; i <= n; i++) {
    output += "\n" + String(i).repeat(i);
  }
  return output;
}

// Array and for-loop
function pattern(n) {
  let output = [];
  for (let i = 1; i <= n; i++) {
    output.push(String(i).repeat(i));
  }
  return output.join("\n");
}

// Array.from()
function pattern(n) {
  let output = Array.from({ length: n }, (e, i, a) => String(i + 1).repeat(i + 1));
  return n < 1 ? "" : output.join("\n"); // n < 1 check not technically necessary
}

// One line for fun
const pattern = (n) => Array.from({ length: n }, (_, i) => String(i + 1).repeat(i + 1)).join("\n");
