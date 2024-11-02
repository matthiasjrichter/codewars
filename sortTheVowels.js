// https://www.codewars.com/kata/59e49b2afc3c494d5d00002a
//
// Sort the Vowels!
// In this kata, we want to sort the vowels in a special format.
//
// Task
// Write a function which takes a input string s and return a string in the following way:
//
//
//                   C|                          R|
//                   |O                          n|
//                   D|                          d|
//    "CODEWARS" =>  |E       "Rnd Te5T"  =>      |
//                   W|                          T|
//                   |A                          |e
//                   R|                          5|
//                   S|                          T|
//
// Notes:
//
// List all the Vowels on the right side of |
// List every character except Vowels on the left side of |
// for the purpose of this kata, the vowels are : a e i o u
// Return every character in its original case
// Each line is seperated with \n
// Invalid input ( undefined / null / integer ) should return an empty string
//
// function sortVowels(s) {
//     //code
//       return '';
//   }

function sortVowels(s) {
  let vowels = "aeiouAEIOU";
  let result = "";

  if (typeof s !== "string") return "";

  for (let char of s) {
    if (vowels.includes(char)) result += "|" + char + "\n";
    else result += char + "|" + "\n";
  }
  return result.slice(0, -1);
}

//alternatively use .trimEnd() to get rid of the trailing newline char
function sortVowels(s) {
  let vowels = "aeiouAEIOU";
  let result = "";

  if (typeof s !== "string") return "";

  for (let char of s) {
    if (vowels.includes(char)) result += "|" + char + "\n";
    else result += char + "|" + "\n";
  }
  return result.trimEnd();
}
//test
sortVowels("CODEWARS");
