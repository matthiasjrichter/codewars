// https://www.codewars.com/kata/52378b3ee72f21e1ea000045/
//
// The Math.min function has stopped working, so we have to use our own function. We are off to a good start, but this function doesn't seem to handle everything properly. Add in the proper checks to return NaN for anything that isn't an actual number, except treat null like 0.
//
// Note: This min function need not handle more than two arguments.
//
// function min(a, b){
//   return (a<b)?a:b;
// }

function min(a, b) {
  if (a === null) a = 0;
  if (b === null) b = 0;
  if (isNaN(a) || isNaN(b)) return NaN;
  return a < b ? a : b;
}

//convert null in return
function min(a, b) {
  if (isNaN(a) || isNaN(b)) return NaN;
  return a < b ? +a : +b;
}

//arrow function and ternary
const min = (a, b) => isNaN(a) || isNaN(b) ? NaN : a < b ? +a : +b;