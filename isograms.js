// https://www.codewars.com/kata/54ba84be607a92aa900000f1
//
// An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.
//
// Example: (Input --> Output)
//
// "Dermatoglyphics" --> true "aba" --> false "moOse" --> false (ignore letter case)
//
// isIsogram "Dermatoglyphics" = true
// isIsogram "moose" = false
// isIsogram "aba" = false
//
// function isIsogram(str){
//     //...
//   }
////////////////////////////////

function isIsogram(str) {
  let arr = str.toLowerCase().split("");
  return arr.every((e) => arr.indexOf(e) === arr.lastIndexOf(e));
}

//alternative using Set
const isIsogram = (str) => new Set(str.toLowerCase()).size === str.length;

//tests
isIsogram("Dermatoglyphics"); // true
isIsogram("moose"); // false
isIsogram("aba"); // false
