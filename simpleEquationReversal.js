// https://www.codewars.com/kata/5aa3af22ba1bb5209f000037/javascript
//
// Given a mathematical equation that has *,+,-,/, reverse it as follows:
//
// solve("100*b/y") = "y/b*100"
// solve("a+b-c/d*30") = "30*d/c-b+a"
// More examples in test cases.
//
// Good luck!
//
// function solve(eq){
//     //..
// }

function solve(eq) {
  let result = "";
  for (let i = 0; i < eq.length; i++) {
    const cur = eq[i];
    if (/\d/.test(cur)) result += cur;
    else result += "," + cur + ",";
  }
  return result.split(",").reverse().join("");
}

// Alternative
function solve(eq) {
  let res = "";
  for (const c of eq) res += /[*+/-]/.test(c) ? `,${c},` : c;
  return res.split(",").reverse().join("");
}

// Regex magic
const solve = eq => eq.split(/([*+/-])/).reverse().join("");