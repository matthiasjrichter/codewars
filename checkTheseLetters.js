// https://www.codewars.com/kata/57470efebf81fea166001627
//
// Write a function that checks if all the letters in the second string are present in the first one at least once, regardless of how many times they appear:
//
// ["ab", "aaa"]    =>  true
// ["trances", "nectar"]    =>  true
// ["compadres", "DRAPES"]  =>  true
// ["parses", "parsecs"]    =>  false
// Function should not be case sensitive, as indicated in example #2. Note: both strings are presented as a single argument in the form of an array.
//
// function letterCheck(arr) {
// //write your code here!!
// }

const letterCheck = (arr) => [...arr[1].toLowerCase()].every((e) => arr[0].toLowerCase().includes(e));

// More performant
function letterCheck(arr) {
  let [str1, str2] = [arr[0].toLowerCase(), arr[1].toLowerCase()];
  return [...str2].every((e) => str1.includes(e));
}

// Set. This shold work but codewars is Node v18 so doesn't support it yet
function letterCheck(arr) {
  let [set1, set2] = [new Set(arr[0].toLowerCase()), new Set(arr[1].toLowerCase())];
  return set2.isSubsetOf(set1);
}

// This works in v18
function letterCheck(arr) {
  let [set1, set2] = [new Set(arr[0].toLowerCase()), new Set(arr[1].toLowerCase())];
  return [...set2].every((e) => set1.has(e));
}