// https://www.codewars.com/kata/5a084a098ba9146690000969
//
// Description:
// This kata requires you to convert minutes (int) to hours and minutes in the format hh:mm (string).
//
// If the input is 0 or negative value, then you should return "00:00"
//
// Hint: use the modulo operation to solve this challenge. The modulo operation simply returns the remainder after a division. For example the remainder of 5 / 2 is 1, so 5 modulo 2 is 1.
//
// Example
// If the input is 78, then you should return "01:18", because 78 minutes converts to 1 hour and 18 minutes.
//
// Good luck! :D
//
// function timeConvert(num) {
//
// }

//Ternary
function timeConvert(num) {
  if (num <= 0) return "00:00";
  const h = Math.trunc(num / 60);
  const m = num % 60;
  return `${h < 10 ? "0" + h : h}:${m < 10 ? "0" + m : m}`;
}

// .padStart()
function timeConvert(num) {
  if (num <= 0) return "00:00";
  const h = Math.trunc(num / 60);
  const m = num % 60;
  return `${String(h).padStart(2, "0")}:${String(m).padStart(2, "0")}`;
}
