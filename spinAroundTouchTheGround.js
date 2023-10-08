// https://www.codewars.com/kata/65127141a5de2b1dcb40927e
//
// Given a list of directions to spin, "left" or "right", return an integer of how many full 360° rotations were made. Note that each word in the array counts as a 90° rotation in that direction.
//
// Worked Example
// ["right", "right", "right", "right", "left", "right"] ➞ 1
// # You spun right 4 times (90 * 4 = 360)
// # You spun left once (360 - 90 = 270)
// # But you spun right once more to make a full rotation (270 + 90 = 360)
// Examples
// ["left", "right", "left", "right"] ➞ 0
//
// ["right", "right", "right", "right", "right", "right", "right", "right"] ➞ 2
//
// ["left", "left", "left", "left"] ➞ 1
// Notes
// Return a positive number.
// All tests will only include the words "right" and "left".
//
// function spinAround(turns) {
//     // Here be dragons!
//     return 0;
//   }

//input is an array containing values "left" and/or "right" (each turn = 90°)
//return rotations
//iterate through the array and add 90 for right, subtract 90 for left
//make that number positive and divide by 360 to get rotations

function spinAround(turns) {
    let degrees = 0;
    turns.forEach((e) => (e === "right" ? (degrees += 90) : (degrees -= 90)));
    return Math.abs(Math.trunc(degrees / 360));
  }
  
//test case
spinAround(["left", "left", "left", "left", "right", "left", "left"]); // 1
  