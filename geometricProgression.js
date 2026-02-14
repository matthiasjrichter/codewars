// https://www.codewars.com/kata/55caef80d691f65cb6000040
//
// In your class, you have started lessons about geometric progression. Since you are also a programmer, you have decided to write a function that will print first n elements of the sequence with the given constant r and first element a.
//
// Result should be separated by comma and space.
//
// Example
// geometricSequenceElements(2, 3, 5) == '2, 6, 18, 54, 162'
// More info: https://en.wikipedia.org/wiki/Geometric_progression
//
// function geometricSequenceElements(a, r, n){
//   // Your code here!
// }

function geometricSequenceElements(a, r, n) {
  let result = [];
  for (let i = 0; i < n; i++) result.push(a * Math.pow(r, i));
  return result.join(", ");
}

// Alternative
const geometricSequenceElements = (a, r, n) => Array.from({ length: n }, (_, i) => a * r ** i).join(", ");

// More efficient:
function geometricSequenceElements(a, r, n) {
  const result = [a];
  for (let i = 1; i < n; i++) result.push(result[i - 1] * r);
  return result.join(", ");
}