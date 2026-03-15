// https://www.codewars.com/kata/583ebb9328a0c034490001ba
//
// Given two arrays of integers m and n, test if they contain at least one identical element. Return true if they do; false if not.
//
// Your code must handle any value within the range of a 32-bit integer, and must be capable of handling either array being empty (which is a false result, as there are no duplicated elements).
//
// function duplicateElements(m, n) {
//     var = bool;
//     // Write your solution here.
//     return bool; // bool: true or false
// }

function duplicateElements(m, n) {
  const setN = new Set(n);
  for (const e of m) if (setN.has(e)) return true;
  return false;
}

// Alternative
const duplicateElements = (m, n) => {
  const setN = new Set(n);
  return m.some(e => setN.has(e));
};