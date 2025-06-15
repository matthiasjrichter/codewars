// https://www.codewars.com/kata/56414fdc6488ee99db00002c
//
// Your job is to figure out the index of which vowel is missing from a given string:
//
// A has an index of 0,
// E has an index of 1,
// I has an index of 2,
// O has an index of 3,
// U has an index of 4.
// Notes: There is no need for string validation and every sentence given will contain all vowels but one. Also, you won't need to worry about capitals.
//
// Examples
// "John Doe hs seven red pples under his bsket"          =>  0  ; missing: "a"
// "Bb Smith sent us six neatly arranged range bicycles"  =>  3  ; missing: "o"
//
// function absentVowel(x){
//
// }

// If statements
function absentVowel(x) {
  if (!x.includes("a")) return 0;
  if (!x.includes("e")) return 1;
  if (!x.includes("i")) return 2;
  if (!x.includes("o")) return 3;
  if (!x.includes("u")) return 4;
}

// .findIndex()
function absentVowel(x) {
  const vowels = ["a", "e", "i", "o", "u"];
  return vowels.findIndex((e) => !x.includes(e));
}

// One line for fun
const absentVowel = (x) => ["a", "e", "i", "o", "u"].findIndex((e) => !x.includes(e));