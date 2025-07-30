// https://www.codewars.com/kata/5572392fee5b0180480001ae
//
// Having two standards for a keypad layout is inconvenient!
// Computer keypad's layout:
// 7 8 9  \n
// 4 5 6  \n
// 1 2 3  \n
//   0 \n
//
// Cell phone keypad's layout:
// 1 2 3\n
// 4 5 6\n
// 7 8 9\n
//   0\n
//
// Solve the horror of unstandardized keypads by providing a function that converts computer input to a number as if it was typed on a phone.
//
// Example:
// "789" -> "123"
//
// Notes:
// You get a string with numbers only
//
// function computerToPhone(numbers) {
//     return '';
// }

function computerToPhone(numbers) {
  let result = "";
  for (let n of numbers) {
    if (n === "1") result += 7;
    else if (n === "2") result += 8;
    else if (n === "3") result += 9;
    else if (n === "7") result += 1;
    else if (n === "8") result += 2;
    else if (n === "9") result += 3;
    else result += n;
  }
  return result;
}

// Alternative
function computerToPhone(numbers) {
  const map = { "1": "7", "2": "8", "3": "9", "7": "1", "8": "2", "9": "3" };
  return numbers.split("").map(n => map[n] || n).join("");
}
