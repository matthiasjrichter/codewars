// https://www.codewars.com/kata/55eca815d0d20962e1000106
//
// Implement the function generateRange which takes three arguments (start, stop, step) and returns the range of integers from start to stop (inclusive) in increments of step.
//
// Examples
// (1, 10, 1) -> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// (-10, 1, 1) -> [-10, -9, -8, -7, -6, -5, -4, -3, -2, -1, 0, 1]
// (1, 15, 20) -> [1]
// Note
// start < stop
// step > 0
//
// function generateRange(min, max, step){
//
// }

// while loop
function generateRange(min, max, step) {
  let i = min;
  let result = [];
  while (i <= max) {
    result.push(i);
    i += step;
  }
  return result;
}

// for loop
function generateRange(start, end, step) {
  let result = [];
  for (let i = start; i <= end; i += step) {
    result.push(i);
  }
  return result;
}