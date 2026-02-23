// https://www.codewars.com/kata/563cb92e0996a4ac0b000042
//
// #Task# Raj once wanted to code a program to make a plus sign using the numbers but he didn't have any idea to do so. Using n as a parameter in the function pattern complete the code and solve the pattern so that Raj fells happy.
//
// ###Rules/Note:###
//
// You are assured that n>1
// There are white spaces on top and bottom left corner (take help of test cases)
// #Examples#
//
// pattern(2)
//
//  1
// 121
//  1
// pattern(5)
//
//     1
//     2
//     3
//     4
// 123454321
//     4
//     3
//     2
//     1
//
//
// pattern(12)
//
//              1
//              2
//              3
//              4
//              5
//              6
//              7
//              8
//              9
//              0
//              1
//   12345678901210987654321
//              1
//              0
//              9
//              8
//              7
//              6
//              5
//              4
//              3
//              2
//              1
// function pattern(n){
// var output="";
//     //being coder
// return output;
// }

function pattern(n) {
  const output = [];

  for (let i = 1; i < n; i++) output.push(String(i % 10).padStart(n, " "));

  let asc = "";
  for (let i = 1; i <= n; i++) asc += i % 10;

  let desc = "";
  for (let i = n - 1; i >= 1; i--) desc += i % 10;

  output.push(asc + desc);

  for (let i = n - 1; i >= 1; i--) output.push(String(i % 10).padStart(n, " "));

  return output.join("\n") + "\n";
}

// Alternative
function pattern(n) {
  const output = [];

  for (let i = 1; i < n; i++) output.push(String(i % 10).padStart(n, " "));

  let asc = ""
  for (let i = 1; i <= n; i++) asc += i % 10;
  
  output.push(asc + [...asc].reverse().slice(1).join(""));

  for (let i = n - 1; i; i--) output.push(String(i % 10).padStart(n, " "));

  return output.join("\n") + "\n";
}

// More concise for fun
function pattern(n) {
  const top = [], asc = Array.from({length: n}, (_, i) => (i + 1) % 10)
  for (let i = 1; i < n; i++) top.push(String(i % 10).padStart(n, " "));
  return [...top, [...asc, ...asc.reverse().slice(1)].join(""), ...top.reverse()].join("\n") + "\n";
}

// Now it's getting stupid
function pattern(n) {
  const top = Array.from({length: n}, (_, i) => String((++i) % 10).padStart(n, " ")).slice(0, -1), asc = Array.from({length: n}, (_, i) => (++i) % 10);
  return [...top, [...asc, ...asc.reverse().slice(1)].join(""), ...top.reverse()].join("\n") + "\n";
}

// For production I'd probably use something like this:
function pattern(n) {
  const nums = Array.from({length: n}, (_, i) => String((i + 1) % 10));
  const top = nums.map(s => s.padStart(n)).slice(0, -1);
  const middle = [...nums, ...[...nums].reverse().slice(1)].join("");
  const bottom = [...top].reverse();
  return [...top, middle, ...bottom].join("\n") + "\n";
}