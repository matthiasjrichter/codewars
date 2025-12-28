// https://www.codewars.com/kata/5834315e06f227a6ac000099/javascript
//
// Agent 47, you have a new task!
// Among citizens of the city X are hidden 2 dangerous criminal twins.
// Your task is to identify them and eliminate!
//
// Everyone except the twins are single-born (i.e., unique individuals).
//
// Given an array of integers, your task is to find two same numbers and return one of them. For example, in the array ```` the answer is 2.
//
// If there are no twins in the city - return None or the equivalent in the language that you are using.
//
// function elimination(arr){
//   //write your code here
// }

const elimination = (arr) => arr.find((e) => arr.indexOf(e) !== arr.lastIndexOf(e)) ?? null;

// Alternative
function elimination(arr) {
  const found = new Set();
  for (const n of arr) {
    if (found.has(n)) return n;
    else found.add(n);
  }
  return null;
}
