// https://www.codewars.com/kata/5700c9acc1555755be00027e
//
// Description:
// Input:
//
// a string strng
// an array of strings arr
// Output of function contain_all_rots(strng, arr) (or containAllRots or contain-all-rots):
//
// a boolean true if all rotations of strng are included in arr
// false otherwise
// Examples:
// contain_all_rots(
//   "bsjq", ["bsjq", "qbsj", "sjqb", "twZNsslC", "jqbs"]) -> true
//
// contain_all_rots(
//   "Ajylvpy", ["Ajylvpy", "ylvpyAj", "jylvpyA", "lvpyAjy", "pyAjylv", "vpyAjyl", "ipywee"]) -> false)
// Note:
// Though not correct in a mathematical sense
//
// we will consider that there are no rotations of strng == ""
// and for any array arr: contain_all_rots("", arr) --> true
// Ref: https://en.wikipedia.org/wiki/String_(computer_science)#Rotations
//
// function containAllRots(strng, arr) {
//     // your code
// }

function rotations(str) {
  let result = [];
  let current = str.split("");
  while (result.length < str.length) {
    result.push(current.join(""));
    current.push(current[0]);
    current.shift();
  }
  return result;
}

const containAllRots = (strng, arr) => rotations(strng).every((e) => arr.includes(e));

// Set and early return for better performance
function rotations(str) {
  let result = new Set();
  let current = str;
  for (let i = 0; i < str.length; i++) {
    result.add(current);
    current = current.slice(1) + current[0];
  }
  return result;
}

function containAllRots(strng, arr) {
  let set = new Set(arr);
  let rots = rotations(strng);
  for (const rot of rots) if (!set.has(rot)) return false;
  return true;
}

// .isSubsetOf() should work but coedwars is still running Node v18
function rotations(str) {
  let result = new Set();
  let current = str;
  for (let i = 0; i < str.length; i++) {
    result.add(current);
    current = current.slice(1) + current[0];
  }
  return result;
}

const containAllRots = (strng, arr) => rotations(strng).isSubsetOf(new Set(arr));