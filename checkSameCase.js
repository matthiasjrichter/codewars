// https://www.codewars.com/kata/5dd462a573ee6d0014ce715b
//
// Write a function that will check if two given characters are the same case.
//
// If either of the characters is not a letter, return -1
// If both characters are the same case, return 1
// If both characters are letters, but not the same case, return 0
// Examples
// 'a' and 'g' returns 1
//
// 'A' and 'C' returns 1
//
// 'b' and 'G' returns 0
//
// 'B' and 'g' returns 0
//
// '0' and '?' returns -1
//
// function sameCase(a, b){
//     return 0;
//   }

//check if not a char

function sameCase(a, b) {
  if (a.toLowerCase() === a.toUpperCase() || b.toLowerCase() === b.toUpperCase()) return -1;
  if (a.toLowerCase() === a && b.toLowerCase() === b) return 1;
  if (a.toUpperCase() === a && b.toUpperCase() === b) return 1;
  return 0;
}

//tests
sameCase("a", "b"); //1
sameCase("0", "?"); //-1
sameCase("a", "B"); //0 