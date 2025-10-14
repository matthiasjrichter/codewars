// https://www.codewars.com/kata/56143efa9d32b3aa65000016/
//
// Write a function that takes as its parameters one or more numbers which are the diameters of circles.
//
// The function should return the total area of all the circles, rounded to the nearest integer in a string that says "We have this much circle: xyz".
//
// You don't know how many circles you will be given, but you can assume it will be at least one.
//
// So:
//
// sumCircles(2) == "We have this much circle: 3"
// sumCircles(2, 3, 4) == "We have this much circle: 23"
//
// function sumCircles() {
//
// }

function sumCircles(...args) {
  const getArea = (d) => Math.PI * Math.pow(d / 2, 2);
  const total = Math.round(args.reduce((a, c) => a + getArea(c), 0));
  return `We have this much circle: ${total}`;
}

// Alternative
const getCircleArea = (d) => Math.PI * (d / 2) ** 2;
function sumCircles(...args) {
  const total = Math.round(args.reduce((a, c) => a + getCircleArea(c), 0));
  return `We have this much circle: ${total}`;
}
