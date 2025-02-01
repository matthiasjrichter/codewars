// https://www.codewars.com/kata/58e3f824a33b52c1dc0001c0
//
// This series of katas will introduce you to basics of doing geometry with computers.
//
// Write the function circleArea/CircleArea which takes in a Circle object and calculates the area of that circle.
// The Circle class can be seen below:
//
// // Represents a Circle where center is a Point and radius is a Number
// class Circle {
//   constructor(center, radius) {
//     this.center = center;
//     this.radius = radius;
//   }
// }
// And the Point class can be seen below:
//
// // Represents a Point where x and y are Numbers
// class Point {
//   constructor (x,y) {
//     this.x = x;
//     this.y = y;
//   }
// }
//
// function circleArea(circle){
//     // your code here
//   }

function circleArea(circle) {
  return Math.PI * Math.pow(circle.radius, 2);
}

// arrow function
const circleArea = (circle) => Math.PI * Math.pow(circle.radius, 2);