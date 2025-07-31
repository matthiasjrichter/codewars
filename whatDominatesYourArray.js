// https://www.codewars.com/kata/559e10e2e162b69f750000b4
//
// A zero-indexed array arr consisting of n integers is given. The dominator of array arr is the value that occurs in more than half of the elements of arr.
// For example, consider array arr such that arr = [3,4,3,2,3,1,3,3]
// The dominator of arr is 3 because it occurs in 5 out of 8 elements of arr and 5 is more than a half of 8.
// Write a function dominator(arr) that, given a zero-indexed array arr consisting of n integers, returns the dominator of arr. The function should return −1 if array does not have a dominator. All values in arr will be >=0.
//
// function dominator(arr) {
//    //code me
// }

function dominator(arr) {
  let counts = new Map();

  arr.forEach((e) => counts.set(e, (counts.get(e) || 0) + 1));
  let max = [...counts].sort((a, b) => b[1] - a[1])[0];
  
  return max[1] > arr.length / 2 ? max[0] : -1;
}

// Early return while counting
function dominator(arr) {
  let counts = new Map();
  let limit = arr.length / 2;

  for (let num of arr) {
    let count = (counts.get(num) || 0) + 1;
    if (count > limit) return num;
    counts.set(num, count);
  }

  return -1;
}