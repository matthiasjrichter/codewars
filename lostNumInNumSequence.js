// https://www.codewars.com/kata/595aa94353e43a8746000120/
//
// An ordered sequence of numbers from 1 to N is given. One number might have deleted from it, then the remaining numbers were mixed. Find the number that was deleted.
//
// Example:
//
// The starting array sequence is [1,2,3,4,5,6,7,8,9]
// The mixed array with one deleted number is [3,2,4,6,7,8,1,9]
// Your function should return the int 5.
// If no number was deleted from the starting array, your function should return the int 0.
//
// Note: N may be 1 or less (in the latter case, the first array will be []).
//
// function findDeletedNumber(arr, mixArr) {
//     // your code
//   }

function findDeletedNumber(arr, mixArr) {
  if (arr.join() === mixArr.sort((a, b) => a - b).join() || arr.length < 1)
    return 0;
  return arr
    .map((e) => {
      if (!mixArr.includes(e)) return e;
    })
    .sort()[0];
}

//alternative
function findDeletedNumber(arr, mixArr) {
  let sorted = mixArr.sort((a, b) => a - b);

  if (arr.join() === sorted.join()) return 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== sorted[i]) return arr[i];
  }
}

//alternative 2
function findDeletedNumber(arr, mixArr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== mixArr.sort((a, b) => a - b)[i]) return arr[i];
  }
  return 0;
}

//clever math
const findDeletedNumber = (arr, mixArr) => arr.reduce((a, c) => a + c, 0) - mixArr.reduce((a, c) => a + c, 0);

//test
findDeletedNumber([1, 2, 3, 4, 5], [3, 4, 1, 5]); //2
