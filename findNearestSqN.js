// https://www.codewars.com/kata/5a805d8cafa10f8b930005ba
//
// Your task is to find the nearest square number, nearest_sq(n) or nearestSq(n), of a positive integer n.
//
// For example, if n = 111, then nearest\_sq(n) (nearestSq(n)) equals 121, since 111 is closer to 121, the square of 11, than 100, the square of 10.
//
// If the n is already the perfect square (e.g. n = 144, n = 81, etc.), you need to just return n.
//
// Good luck :)
//
// function nearestSq(n){
//     // your code
// }

//looping
function nearestSq(n) {
  if (Math.sqrt(n) % 1 === 0) return n;
  let higher = n;
  let lower = n;
  while (Math.sqrt(higher) % 1 !== 0) {
    higher++;
  }
  while (Math.sqrt(lower) % 1 !== 0) {
    lower--;
  }
  if (higher - n < n - lower) return higher;
  return lower;
}

//math.ceil() and Math.floor()
function nearestSq(n) {
  if (Number.isInteger(Math.sqrt(n))) return n;
  let higher = Math.ceil(Math.sqrt(n)) ** 2;
  let lower = Math.floor(Math.sqrt(n)) ** 2;
  return higher - n < n - lower ? higher : lower;
}

//simplified
function nearestSq(n) {
  return Math.round(Math.sqrt(n)) ** 2;
}

//arrow function
const nearestSq = (n) => Math.round(Math.sqrt(n)) ** 2;

//test
nearestSq(10); //9
nearestSq(8); //9
