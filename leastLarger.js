// https://www.codewars.com/kata/5f8341f6d030dc002a69d7e4
//
// Task
// Given an array of numbers and an index, return either the index of the smallest number that is larger than the element at the given index, or -1 if there is no such index ( or, where applicable, Nothing or a similarly empty value ).
//
// Notes
// Multiple correct answers may be possible. In this case, return any one of them.
// The given index will be inside the given array.
// The given array will, therefore, never be empty.
//
// Example
// leastLarger( [4, 1, 3, 5, 6], 0 )  =>  3
// leastLarger( [4, 1, 3, 5, 6], 4 )  => -1
//
// function leastLarger(a,i) {
//   return -1;
// }

function leastLarger(a, i) {
  let filtered = [];
  a.forEach((e, idx) => {
    if (e > a[i]) filtered.push([e, idx]);
  });
  return filtered.length ? filtered.sort((a, b) => a[0] - b[0])[0][1] : -1;
}

// Better performance:
function leastLarger(a, i) {
  let bestVal = Infinity;
  let bestIdx = -1;
  a.forEach((e, idx) => {
    if (e > a[i] && e <= bestVal) bestVal = e, bestIdx = idx;
  });
  return bestIdx;
}

// .reduce()
function leastLarger(a, i) {
  return a.reduce(
    (bestIdx, val, idx) =>
      val > a[i] && (bestIdx === -1 || val < a[bestIdx]) ? idx : bestIdx,
    -1
  );
}

// One line for fun:
const leastLarger = (a, i) => a.reduce((bestIdx, val, idx) => val > a[i] && (bestIdx === -1 || val < a[bestIdx]) ? idx : bestIdx, -1);

// .filter()
const leastLarger = (a, i) => a.indexOf(Math.min(...a.filter(n => n > a[i])));