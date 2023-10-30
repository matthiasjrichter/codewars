// https://www.codewars.com/kata/54da5a58ea159efa38000836
//
// Given an array of integers, find the one that appears an odd number of times.
//
// There will always be only one integer that appears an odd number of times.
//
// Examples
// [7] should return 7, because it occurs 1 time (which is odd).
// [0] should return 0, because it occurs 1 time (which is odd).
// [1,1,2] should return 2, because it occurs 1 time (which is odd).
// [0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
// [1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd).
//
// function findOdd(A) {
//   //happy coding!
//   return 0;
// }

function findOdd(A) {
  let numMap = {};
  for (let num of A) {
    if (numMap.hasOwnProperty(num)) {
      numMap[num]++;
    } else {
      numMap[num] = 1;
    }
  }

  let result = Object.fromEntries(
    Object.entries(numMap).filter(([key, val]) => val % 2 !== 0)
  );

  return +Object.keys(result);
}

//alternative with reduce() and for loop
function findOdd(A) {
  let numMap = A.reduce((numMap, num) => {
    numMap[num] = (numMap[num] || 0) + 1;
    return numMap;
  }, {});

  for (prop in numMap) {
    if (numMap[prop] % 2 !== 0) return +prop;
  }
}

//test
findOdd([1, 2, 2, 3, 3, 3, 4, 3, 3, 3, 2, 2, 1]); // returns 4
