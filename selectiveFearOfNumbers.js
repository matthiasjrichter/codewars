// https://www.codewars.com/kata/55b1fd84a24ad00b32000075
//
// I've got a crazy mental illness. I dislike numbers a lot. But it's a little complicated: The number I'm afraid of depends on which day of the week it is... This is a concrete description of my mental illness:
//
// Monday --> 12
//
// Tuesday --> numbers greater than 95
//
// Wednesday --> 34
//
// Thursday --> 0
//
// Friday --> numbers divisible by 2
//
// Saturday --> 56
//
// Sunday --> 666 or -666
//
// Write a function which takes a string (day of the week) and an integer (number to be tested) so it tells the doctor if I'm afraid or not. (return a boolean)
//
// var AmIAfraid = function(day, num){
//   //Help me...
// }

const AmIAfraid = (day, num) => {
  if (day === "Monday" && num === 12) return true;
  if (day === "Tuesday" && num > 95) return true;
  if (day === "Wednesday" && num === 34) return true;
  if (day === "Thursday" && num === 0) return true;
  if (day === "Friday" && num % 2 === 0) return true;
  if (day === "Saturday" && num === 56) return true;
  if (day === "Sunday" && Math.abs(num) === 666) return true;
  return false;
};

// Implicit return
const AmIAfraid = (day, num) =>
  (day === "Monday" && num === 12) ||
  (day === "Tuesday" && num > 95) ||
  (day === "Wednesday" && num === 34) ||
  (day === "Thursday" && num === 0) ||
  (day === "Friday" && num % 2 === 0) ||
  (day === "Saturday" && num === 56) ||
  (day === "Sunday" && Math.abs(num) === 666);

// Lookup object
const fearConditions = {
  Monday:    (n) => n === 12,
  Tuesday:   (n) => n > 95,
  Wednesday: (n) => n === 34,
  Thursday:  (n) => n === 0,
  Friday:    (n) => n % 2 === 0,
  Saturday:  (n) => n === 56,
  Sunday:    (n) => Math.abs(n) === 666,
};
const AmIAfraid = (day, num) => fearConditions[day](num);
