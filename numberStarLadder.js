// https://www.codewars.com/kata/5631213916d70a0979000066
//
// Using n as a parameter in the function pattern, where n > 0, complete the code to get the pattern:
//
// 1
// 1*2
// 1**3
// 1***4
// ... and so on...
// Note: There is no newline in the end (after the pattern ends).
//
// Examples
// pattern(3) should return "1\n1*2\n1**3", e.g. the following:
//
// 1
// 1*2
// 1**3
// pattern(10): should return the following:
//
// 1
// 1*2
// 1**3
// 1***4
// 1****5
// 1*****6
// 1******7
// 1*******8
// 1********9
// 1*********10
//
// function pattern(n){
//   return "";
// }

function pattern(n) {
  let res = ["1"];
  for (let i = 2; i <= n; i++) res.push("1" + "*".repeat(i - 1) + i);
  return res.join("\n");
}

// One line for fun
const pattern = n => Array.from({length: n}, (_, i) => i ? `1${"*".repeat(i)}${i + 1}` : "1").join("\n");