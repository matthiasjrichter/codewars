// https://www.codewars.com/kata/561046a9f629a8aac000001d
//
// You have two arrays in this kata, every array contains unique elements only. Your task is to calculate number of elements in the first array which are also present in the second array.
//
// function matchArrays(v,r){
//
// }

// for of loop
function matchArrays(v, r) {
  let result = 0;
  for (let e of v) {
    if (r.includes(e)) result++;
  }
  return result;
}

// Arrow function, ternary, .reduce()
const matchArrays = (v, r) => v.reduce((a, c) => (r.includes(c) ? ++a : a), 0);

// .includes() returns a Boolean. when a is a number true/false becomes 1/0:
const matchArrays = (v, r) => v.reduce((a, c) => a + r.includes(c), 0);
