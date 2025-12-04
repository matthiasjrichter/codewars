// https://www.codewars.com/kata/58d3487a643a3f6aa20000ff
//
// Given an unsorted array of integers, find the min nber in the array, the max nber in the array, and the min nber between the two array bounds that is not in the array.
//
// For instance, given the array [-1, 4, 5, -23, 24], the min nber is -23, the max nber is 24, and the min nber between the array bounds is -22. You may assume the input is well-formed.
//
// You solution should return an array [min, minimumAbsent, max]
//
// The min integer should be the integer from the array with the lowest value.
//
// The max integer should be the integer from the array with the highest value.
//
// The minimumAbsent is the min nber between the max and the min nber that is not in the array.
//
// minMinMax([-1, 4, 5, -23, 24]); //[-23, -22, 24]
// minMinMax([1, 3, -3, -2, 8, -1]); //[-3, 0, 8]
// minMinMax([2, -4, 8, -5, 9, 7]); //[-5, -3,9]
//
// function minMinMax(array) {
//   // solution goes here!
// }

// Efficient single loop to find min/max
function minMinMax(array) {
  let [min, max] = [array[0], array[0]];
  for (let n of array) {
    if (n < min) min = n;
    if (n > max) max = n;
  }

  let set = new Set(array);
  let minAbsent = min + 1;
  while (set.has(minAbsent)) minAbsent++;

  return [min, minAbsent, max];
}

// more concise, less efficient, wouldn't use that in production
const minMinMax = (arr) => {
  let [min, max] = [Math.min(...arr), Math.max(...arr)];

  let set = new Set(arr);
  let minAbsent = min + 1;
  while (set.has(minAbsent)) minAbsent++;

  return [min, minAbsent, max];
};
