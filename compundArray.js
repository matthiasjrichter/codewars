// https://www.codewars.com/kata/56044de2aa75e28875000017
//
// You have to create a method "compoundArray" which should take as input two int arrays of different length and return one int array with numbers of both arrays shuffled one by one.
//
// Input - {1,2,3,4,5,6} and {9,8,7,6}
// Output - {1,9,2,8,3,7,4,6,5,6}
//
// function compoundArray(a, b) {
//   // Your code here
// }

function compoundArray(a, b) {
  const maxLen = a.length > b.length ? a.length : b.length;
  const res = [];
  for (let i = 0; i < maxLen; i++) {
    if (a[i] !== undefined) res.push(a[i]);
    if (b[i] !== undefined) res.push(b[i]);
  }
  return res;
}

// Alternative
function compoundArray(a, b) {
  const maxLen = Math.max(a.length, b.length);
  const res = [];
  for (let i = 0; i < maxLen; i++) {
    if (i < a.length) res.push(a[i]);
    if (i < b.length) res.push(b[i]);
  }
  return res;
}