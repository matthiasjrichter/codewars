// https://www.codewars.com/kata/563c13853b07a8f17c000022
//
// Write a simple function that takes as a parameter a date object and returns a boolean value representing whether the date is today or not.
//
// Make sure that your function does not return a false positive by only checking the day.
//
// function isToday(date) {
//     //Code goes here.
//   }

function isToday(date) {
  let currentDate = new Date();
  return (
    date.getDate() === currentDate.getDate() &&
    date.getMonth() === currentDate.getMonth() &&
    date.getFullYear() === currentDate.getFullYear()
  );
}
