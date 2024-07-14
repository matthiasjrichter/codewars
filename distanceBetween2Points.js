// https://www.codewars.com/kata/58dced7b702b805b200000be
//
// This series of katas will introduce you to basics of doing geometry with computers.
//
// Point objects have attributes x and y.
//
// Write a function calculating distance between Point a and Point b.
//
// Input coordinates fit in range
// −
// 50
// ⩽
// 𝑥
// ,
// 𝑦
// ⩽
// 50
// −50⩽x,y⩽50. Tests compare expected result and actual answer with tolerance of 1e-6.
//
// function distanceBetweenPoints(a, b) {
//     return 0; // your code here
//   }

function distanceBetweenPoints(a, b) {
  const dx = b.x - a.x;
  const dy = b.y - a.y;
  return Math.sqrt(dx * dx + dy * dy);
}

//alternative
const distanceBetweenPoints = (a, b) => Math.sqrt((b.x - a.x)**2 + (b.y - a.y)**2);