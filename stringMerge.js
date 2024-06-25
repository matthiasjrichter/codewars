// https://www.codewars.com/kata/597bb84522bc93b71e00007e
//
// Given two words and a letter, return a single word that's a combination of both words, merged at the point where the given letter first appears in each word. The returned word should have the beginning of the first word and the ending of the second, with the dividing letter in the middle. You can assume both words will contain the dividing letter.
//
// Examples
// ("hello", "world", "l")       ==>  "held"
// ("coding", "anywhere", "n")   ==>  "codinywhere"
// ("jason", "samson", "s")      ==>  "jasamson"
// ("wonderful", "people", "e")  ==>  "wondeople"
//
// function stringMerge(string1, string2, letter){
//     // Add code here :)
//   }

//LOL sorry this is really weird :D
function stringMerge(string1, string2, letter) {
  let first = "";
  for (let char of string1) {
    if (char !== letter) first += char;
    else break;
  }
  let second = string2.slice(string2.indexOf(letter));
  return first + second;
}

//Much better:
const stringMerge = (string1, string2, letter) => string1.slice(0, string1.indexOf(letter)) + string2.slice(string2.indexOf(letter));

//test
stringMerge("person", "here", "e"); // "pere"
