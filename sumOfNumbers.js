// https://www.codewars.com/kata/55f2b110f61eb01779000053
//
// Given two integers a and b, which can be positive or negative, find the sum of all the integers between and including them and return it. If the two numbers are equal return a or b.
//
// Note: a and b are not ordered!
//
// Examples (a, b) --> output (explanation)
// (1, 0) --> 1 (1 + 0 = 1)
// (1, 2) --> 3 (1 + 2 = 3)
// (0, 1) --> 1 (0 + 1 = 1)
// (1, 1) --> 1 (1 since both are same)
// (-1, 0) --> -1 (-1 + 0 = -1)
// (-1, 2) --> 2 (-1 + 0 + 1 + 2 = 2)
// Your function should only return a number, not the explanation about how you get that number.
//
// function getSum(a, b)
// {
//    //Good luck!
// }

function getSum(a, b) {
  let result = 0;
  if (a === b) return a;
  if (a < b) {
    for (let i = a; i <= b; i++) {
      result += i;
    }
  } else {
    for (let i = b; i <= a; i++) {
      result += i;
    }
  }

  return result;
}

//more readable
function getSum(a, b) {
  let result = 0;
  let min = 0;
  let max = 0;

  if (a === b) result = 0;
  if (a < b) {
    min = a;
    max = b;
  } else {
    min = b;
    max = a;
  }

  for (let i = min; i <= max; i++) {
    result += i;
  }

  return result;
}

//using Math.min() and Math.max()
function getSum(a, b) {
  let result = 0;
  let min = Math.min(a, b);
  let max = Math.max(a, b);

  if (a === b) result = 0;

  for (let i = min; i <= max; i++) {
    result += i;
  }

  return result;
}

//tests
getSum(1, 0); // 1
getSum(0, 1); // 1
getSum(1, 2); // 3
getSum(1, 1); // 1
getSum(-1, 2); // 2