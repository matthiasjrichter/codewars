// https://www.codewars.com/kata/57547f9182655569ab0008c4/
//
// You need to design a recursive function called replicate which will receive arguments times and number.
//
// The function should return an array containing repetitions of the number argument. For instance, replicate(3, 5) should return [5,5,5]. If the times argument is negative, return an empty array.
//
// As tempting as it may seem, do not use loops to solve this problem.
//
// function replicate(times, number) {
// 	// your solution here
// }

function replicate(times, number) {
  return Array.from({ length: times }, (e) => number);
}

// Arrow function
const replicate = (times, number) => Array.from({ length: times }, (e) => number);

// .fill()
const replicate = (times, number) => Array.from({ length: times } ).fill(number);

// Actual recursion
function replicate(times, number) {
  if (times <= 0) return [];
  return [number].concat(replicate(times - 1, number));
}

// Arrow function
const replicate = (times, number) => times > 0 ? [number, ...replicate(times - 1, number)] : [];