// https://www.codewars.com/kata/59dd3ccdded72fc78b000b25
// Complete the function which returns the weekday according to the input number:
//
// 1 returns "Sunday"
// 2 returns "Monday"
// 3 returns "Tuesday"
// 4 returns "Wednesday"
// 5 returns "Thursday"
// 6 returns "Friday"
// 7 returns "Saturday"
// Otherwise returns "Wrong, please enter a number between 1 and 7"
//
// function whatday(num) {
//
//     // put your code here
//
//
//
//   }

function whatday(num) {
  if (num === 1) return "Sunday";
  if (num === 2) return "Monday";
  if (num === 3) return "Tuesday";
  if (num === 4) return "Wednesday";
  if (num === 5) return "Thursday";
  if (num === 6) return "Friday";
  if (num === 7) return "Saturday";
  else return "Wrong, please enter a number between 1 and 7";
}

//alternative with switch statement

function whatday(num) {
    switch (num) {
        case 1: return "Sunday";
        case 2: return "Monday";
        case 3: return "Tuesday";
        case 4: return "Wednesday";
        case 5: return "Thursday";
        case 6: return "Friday";
        case 7: return "Saturday";
        default: return "Wrong, please enter a number between 1 and 7";
    }
}