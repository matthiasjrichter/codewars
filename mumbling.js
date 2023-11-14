// https://www.codewars.com/kata/5667e8f4e3f572a8f2000039
//
// This time no story, no theory. The examples below show you how to write function accum:
//
// Examples:
// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"
// The parameter of accum is a string which includes only letters from a..z and A..Z.
//
// function accum(s) {
// 	// your code
// }

//repeat index times
//Capitalize first letter, rest lowercase
//add "-" in between

function accum(s) {
    let arr = s.split("");
    let repeat = arr.map((e, i, a) => e.repeat(i + 1));
    let casing = repeat.map((e, i, a) => e[0].toUpperCase() + e.slice(1).toLowerCase());
    return casing.join("-");
  }
  
//single loop
function accum(s) {
  let arr = s.toLowerCase().split("");
  return arr.map((e, i, _) => e[0].toUpperCase() + e.repeat(i)).join("-");
}

//one line
const accum = (s) => s.toLowerCase().split("").map((e, i) => e[0].toUpperCase() + e.repeat(i)).join("-");

//tests
accum("abcd"); // "A-Bb-Ccc-Dddd"
accum("MjtkuBovqrU"); // "M-Jj-Ttt-Kkkk-Uuuuu-Bbbbbb-Ooooooo-Vvvvvvvv-Qqqqqqqqq-Rrrrrrrrrr-Uuuuuuuuuuu"