// https://www.codewars.com/kata/5bbb8887484fcd36fb0020ca
//
// Count how often sign changes in array.
//
// result
// number from 0 to ... . Empty array returns 0
//
// example
// const arr = [1, -3, -4, 0, 5];
//
// /*
// | elem | count |
// |------|-------|
// |  1   |  0    |
// | -3   |  1    |
// | -4   |  1    |
// |  0   |  2    |
// |  5   |  2    |
// */
//
// catchSignChange(arr) == 2;
//
// function catchSignChange(arr) {
//     // TODO
//   }

function catchSignChange(arr) {
  if (!arr.length) return 0;

  let prevSign = arr[0] < 0 ? false : true;
  let count = 0;

  for (let i = 1; i < arr.length; i++) {
    let currentSign = arr[i] < 0 ? false : true;
    if (currentSign !== prevSign) {
      count++;
      prevSign = currentSign;
    }
  }

  return count;
}

// A bit more concise and without early return
function catchSignChange(arr) {
  let prevSign = arr[0] >= 0;
  let count = 0;

  for (let i = 1; i < arr.length; i++) {
    let currentSign = arr[i] >= 0;
    if (currentSign !== prevSign) {
      count++;
      prevSign = currentSign;
    }
  }

  return count;
}
