// https://www.codewars.com/kata/57eb936de1051801d500008a
//
// You are given an initial 2-value array (x). You will use this to calculate a score.
//
// If both values in (x) are numbers, the score is the sum of the two. If only one is a number, the score is that number. If neither is a number, return 'Void!'.
//
// Once you have your score, you must return an array of arrays. Each sub array will be the same as (x) and the number of sub arrays should be equal to the score.
//
// For example:
//
// if (x) == ['a', 3]  you should return [['a', 3], ['a', 3], ['a', 3]].
//
// function explode(x){
//
// }

function explode(x) {
  if (typeof x[0] !== "number" && typeof x[1] !== "number") return "Void!";

  let score = 0;
  if (typeof x[0] === "number" && typeof x[1] === "number") score = x[0] + x[1];
  else if (typeof x[0] === "number") score = x[0];
  else if (typeof x[1] === "number") score = x[1];

  return Array.from({ length: score }, (e) => x);
}

// .every()
function explode(x) {
  if (x.every((e) => typeof e !== "number")) return "Void!";

  let score = 0;
  if (x.every((e) => typeof e === "number")) score = x[0] + x[1];
  else if (typeof x[0] === "number") score = x[0];
  else if (typeof x[1] === "number") score = x[1];

  return Array.from({ length: score }, (e) => x);
}

// .reduce
function explode(x) {
  if (x.every((e) => typeof e !== "number")) return "Void!";
  let score = x.reduce((a, c) => a + (typeof c === "number" ? c : 0), 0);
  return Array.from({ length: score }, (e) => x);
}

// more concise
function explode(x) {
  let score = x.reduce((a, c) => a + (typeof c === "number" ? c : 0), 0);
  return x.every((e) => typeof e !== "number")
    ? "Void!"
    : Array.from({ length: score }, (e) => x);
}

// One line for fun
const explode = (x) => x.every((e) => typeof e !== "number") ? "Void!": Array.from({ length: x.reduce((a, c) => a + (typeof c === "number" ? c : 0), 0) }, (e) => x);



// Different approach with .filter()
function explode(x) {
  let nums = x.filter((e) => typeof e === "number");
  if (!nums.length) return "Void!";

  let score = nums.reduce((a, c) => a + c);
  return Array.from({ length: score }, (e) => x);
}

// More concise
function explode(x) {
  let nums = x.filter((e) => typeof e === "number");
  if (!nums.length) return "Void!";
  return Array.from({ length: nums.reduce((a, c) => a + c) }, (e) => x);
}

// Ternary
function explode(x) {
  let nums = x.filter((e) => typeof e === "number");
  return nums.length ? Array.from({ length: nums.reduce((a, c) => a + c) }, (e) => x) : "Void!"
}