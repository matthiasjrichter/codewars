// https://www.codewars.com/kata/576bb3c4b1abc497ec000065
//
// Compare two strings by comparing the sum of their values (ASCII character code).
//
// For comparing treat all letters as UpperCase
// null/NULL/Nil/None should be treated as empty strings
// If the string contains other characters than letters, treat the whole string as it would be empty
// Your method should return true, if the strings are equal and false if they are not equal.
//
// Examples:
// "AD", "BC"  -> equal
// "AD", "DD"  -> not equal
// "gf", "FG"  -> equal
// "zz1", ""   -> equal (both are considered empty)
// "ZzZz", "ffPFF" -> equal
// "kl", "lz"  -> not equal
// null, ""    -> equal
//
// function compare(s1, s2) {
//
// }

//forEach() loop
function compare(s1, s2) {
  if (!s1 || /[^A-Z]/g.test(s1.toUpperCase())) s1 = "";
  if (!s2 || /[^A-Z]/g.test(s2.toUpperCase())) s2 = "";

  let count1 = 0;
  let count2 = 0;
  [...s1.toUpperCase()].forEach((e) => (count1 += e.charCodeAt()));
  [...s2.toUpperCase()].forEach((e) => (count2 += e.charCodeAt()));

  return count1 === count2;
}

//reduce()
function compare(s1, s2) {
  if (!s1 || /[^A-Z]/g.test(s1.toUpperCase())) s1 = "";
  if (!s2 || /[^A-Z]/g.test(s2.toUpperCase())) s2 = "";

  let count1 = [...s1.toUpperCase()].reduce((a, c) => a + c.charCodeAt(), 0);
  let count2 = [...s2.toUpperCase()].reduce((a, c) => a + c.charCodeAt(), 0);

  return count1 === count2;
}

//helper function
function getCharCodeSum(s) {
  if (!s || /[^A-Z]/g.test(s.toUpperCase())) s = "";
  return [...s.toUpperCase()].reduce((a, c) => a + c.charCodeAt(), 0);
}
const compare = (s1, s2) => getCharCodeSum(s1) === getCharCodeSum(s2);

//ternary
const getCharCodeSum = (s) =>
  !s || /[^A-Z]/g.test(s.toUpperCase())
    ? s = ""
    : [...s.toUpperCase()].reduce((a, c) => a + c.charCodeAt(), 0);

const compare = (s1, s2) => getCharCodeSum(s1) === getCharCodeSum(s2);

//tests
compare("gf", "FG"); //true
compare(null, "FG"); //false
compare(null, "FG1"); //true
