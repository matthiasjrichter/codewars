// https://www.codewars.com/kata/580dda86c40fa6c45f00028a/train/javascript
//
// Find the sum of the odd numbers within an array, after cubing the initial integers. The function should return undefined if any of the values aren't numbers.
//
// function cubeOdd(arr) {
//
//     // insert code here >.<
//
//
//     return 0;
//     }

function cubeOdd(arr) {
  if (arr.some((e) => typeof e !== "number")) return undefined;
  let result = 0;
  arr.forEach((n) => {
    if (n % 2 !== 0) {
      result += n * n * n;
    }
  });
  return result;
}

//isNan() and Math.pow()
function cubeOdd(arr) {
  if (arr.some((e) => isNaN(e))) return undefined;
  return arr.reduce((a, c) => (c % 2 !== 0 ? a + Math.pow(c, 3) : a), 0);
}

//one line for fun
const cubeOdd = (arr) => arr.some((e) => isNaN(e)) ? undefined : arr.reduce((a, c) => (c % 2 !== 0 ? a + Math.pow(c, 3) : a), 0);

//tests
cubeOdd([1, 2, 3, 4]); // 28
cubeOdd(["a", 12, 9, "z", 42]); // undefined
cubeOdd([-3, -2, 2, 3]); // 0
