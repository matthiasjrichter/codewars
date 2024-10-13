// https://www.codewars.com/kata/65128732b5aff40032a3d8f0
//
// Given two strings comprised of + and -, return a new string which shows how the two strings interact in the following way:
//
// When positives and positives interact, they remain positive.
// When negatives and negatives interact, they remain negative.
// But when negatives and positives interact, they become neutral, and are shown as the number 0.
// Worked Example
// ("+-+", "+--") ➞ "+-0"
// # Compare the first characters of each string, then the next in turn.
// # "+" against a "+" returns another "+".
// # "-" against a "-" returns another "-".
// # "+" against a "-" returns "0".
// # Return the string of characters.
// Examples
// ("--++--", "++--++") ➞ "000000"
//
// ("-+-+-+", "-+-+-+") ➞ "-+-+-+"
//
// ("-++-", "-+-+") ➞ "-+00"
// Notes
// The two strings will be the same length.
// function neutralise(s1, s2) {
//     // Here be dragons!
//     return "";
//   }

function neutralise(s1, s2) {
  let result = "";
  for (let i = 0; i < s1.length; i++) {
    if (s1[i] === s2[i]) result += s1[i];
    else result += 0;
  }
  return result;
}

//Ternary
function neutralise(s1, s2) {
  let result = "";
  for (let i = 0; i < s1.length; i++) {
    result += (s1[i] === s2[i]) ? s1[i] : 0;
  }
  return result;
}

//test
neutralise("-++-", "-+-+"); // "-+00"
