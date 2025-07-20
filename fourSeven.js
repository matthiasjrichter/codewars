// https://www.codewars.com/kata/5ff50f64c0afc50008861bf0
// 
// Four Seven
// Simple kata, simple rules: your function should accept the inputs 4 and 7. If 4 is entered, the function should return 7. If 7 is entered, the function should return 4. Anything else entered as input should return 0. There's only one catch, your function cannot include if statements, switch statements, or the ternary operator (or the eval function due to the fact that you can get around the if requirement using it).
// 
// There are some very simple ways of answering this problem, but I encourage you to try and be as creative as possible.
// 
// Good Luck!
// 
// function fourSeven(n){
//   // Your Code Here
// }

function fourSeven(n){
  let values = new Map([[4, 7], [7, 4]]);
  return values.get(n) || 0;
}

// Arrow function
const fourSeven = (n) => new Map([[4, 7], [7, 4]]).get(n) || 0;