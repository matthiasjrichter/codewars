// https://www.codewars.com/kata/553e8b195b853c6db4000048
//
// Write a program to determine if a string contains only unique characters. Return true if it does and false otherwise.
//
// The string may contain any of the 128 ASCII characters. Characters are case-sensitive, e.g. 'a' and 'A' are considered different characters.
//
// function hasUniqueChars(str){
//   // ...
// }

function hasUniqueChars(str) {
  for (let char of str) {
    if (str.indexOf(char) !== str.lastIndexOf(char)) return false;
  }
  return true;
}

// .every()
const hasUniqueChars = (str) => [...str].every((e) => str.indexOf(e) === str.lastIndexOf(e));

// Set
const hasUniqueChars = (str) => new Set(str).size === str.length;
