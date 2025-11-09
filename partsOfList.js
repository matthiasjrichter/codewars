// https://www.codewars.com/kata/56f3a1e899b386da78000732
//
// Description:
// Write a function partlist that gives all the ways to divide a list (an array) of at least two elements into two non-empty parts.
//
// Each two non empty parts will be in a pair (or an array for languages without tuples or a structin C - C: see Examples test Cases - )
// Each part will be in a string
// Elements of a pair must be in the same order as in the original array.
// Examples of returns in different languages:
// a = ["az", "toto", "picaro", "zone", "kiwi"] -->
// [["az", "toto picaro zone kiwi"], ["az toto", "picaro zone kiwi"], ["az toto picaro", "zone kiwi"], ["az toto picaro zone", "kiwi"]]
// or
//  a = {"az", "toto", "picaro", "zone", "kiwi"} -->
// {{"az", "toto picaro zone kiwi"}, {"az toto", "picaro zone kiwi"}, {"az toto picaro", "zone kiwi"}, {"az toto picaro zone", "kiwi"}}
// or
// a = ["az", "toto", "picaro", "zone", "kiwi"] -->
// [("az", "toto picaro zone kiwi"), ("az toto", "picaro zone kiwi"), ("az toto picaro", "zone kiwi"), ("az toto picaro zone", "kiwi")]
// or
// a = [|"az", "toto", "picaro", "zone", "kiwi"|] -->
// [("az", "toto picaro zone kiwi"), ("az toto", "picaro zone kiwi"), ("az toto picaro", "zone kiwi"), ("az toto picaro zone", "kiwi")]
// or
// a = ["az", "toto", "picaro", "zone", "kiwi"] -->
// "(az, toto picaro zone kiwi)(az toto, picaro zone kiwi)(az toto picaro, zone kiwi)(az toto picaro zone, kiwi)"
// Note
// You can see other examples for each language in "Your test cases"
//
// function partlist(arr) {
//     // your code
// }

// Preferred solution
function partlist(arr) {
  let result = [];
  for (let i = 1; i < arr.length; i++) {
    result.push([arr.slice(0, i).join(" "), arr.slice(i).join(" ")]);
  }
  return result;
}

// Alternative
function partlist(arr) {
  let result = new Array(arr.length - 1);
  for (let i = 1; i < arr.length; i++) {
    result[i - 1] = [arr.slice(0, i).join(" "), arr.slice(i).join(" ")];
  }
  return result;
}

// One line for fun
const partlist = (arr) => arr.slice(1).map((_, i) => [arr.slice(0, i + 1).join(" "), arr.slice(i + 1).join(" ")]);


// Test
partlist(["I", "wish", "I", "hadn't", "come"]); //[["I", "wish I hadn't come"], ["I wish", "I hadn't come"], ["I wish I", "hadn't come"], ["I wish I hadn't", "come"]]
