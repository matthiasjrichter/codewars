// https://www.codewars.com/kata/581f4ac139dc423f04000b99
//
// You will be given an array that contains two strings. Your job is to create a function that will take those two strings and transpose them, so that the strings go from top to bottom instead of left to right.
//
// e.g. transposeTwoStrings(['Hello','World']);
//
// should return
//
// H W
// e o
// l r
// l l
// o d
// A few things to note:
//
// There should be one space in between the two characters
// You don't have to modify the case (i.e. no need to change to upper or lower)
// If one string is longer than the other, there should be a space where the character would be
//
// function transposeTwoStrings (array) {
// 	return '';
// }

function transposeTwoStrings(array) {
  const res = [], [a, b] = array, longest = a.length > b.length ? a : b;
  for (let i = 0; i < longest.length; i++) res.push((a[i] ?? " ") + " " + (b[i] ?? " "));
  return res.join("\n");
}

// Alternative
function transposeTwoStrings(a) {
  const [x, y] = a, len = Math.max(x.length, y.length)
  const res = Array.from({length: len}, (_, i) => `${a[0][i] ?? " "} ${a[1][i] ?? " "}`)
  return res.join("\n");
}

// One line for fun
const transposeTwoStrings = a => Array.from({length: Math.max(a[0].length, a[1].length)}, (_, i) => `${a[0][i] ?? " "} ${a[1][i] ?? " "}`).join("\n");