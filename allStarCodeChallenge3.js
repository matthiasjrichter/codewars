// https://www.codewars.com/kata/58640340b3a675d9a70000b9/javascript
// This Kata is intended as a small challenge for my students
//
// Create a function that takes a string argument and returns that same string with all vowels removed (vowels are "a", "e", "i", "o", "u").
//
// Example (Input --> Output)
//
// "drake" --> "drk"
// "aeiou" --> ""
// remove_vowels("drake") // => "drk"
// remove_vowels("aeiou") // => ""
//
// var removeVowels = function(str){
//     //code here
//
//     }

var removeVowels = function (str) {
  return str
    .replaceAll("a", "")
    .replaceAll("e", "")
    .replaceAll("i", "")
    .replaceAll("o", "")
    .replaceAll("u", "");
};

//alternative
var removeVowels = function (str) {
  const vowels = "aeiou";
  return str
    .split("")
    .filter((char) => !vowels.includes(char))
    .join("");
};

//RegEx
var removeVowels = function (str) {
  return str.replace(/[aeiou]/g, "");
};
