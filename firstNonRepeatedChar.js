// https://www.codewars.com/kata/570f6436b29c708a32000826/
//
// You need to write a function, that returns the first non-repeated character in the given string.
//
// If all the characters are unique, return the first character of the string.
// If there is no unique character, return null in JS or Java, None in Python, '\0' in C.
//
// You can assume, that the input string has always non-zero length.
//
// Examples
// "test"   returns "e"
// "teeter" returns "r"
// "trend"  returns "t" (all the characters are unique)
// "aabbcc" returns null (all the characters are repeated)
//
// function firstNonRepeated(s) {
//   // your code here
// }

function firstNonRepeated(s) {
  return [...s].find((e) => s.indexOf(e) === s.lastIndexOf(e)) || null;
}

// Arrow function and nullish coalescing operator
const firstNonRepeated = (s) => [...s].find((e) => s.indexOf(e) === s.lastIndexOf(e)) ?? null;

// Without intermediate Array
function firstNonRepeated(s) {
  for (let c of s) {
    if (s.indexOf(c) === s.lastIndexOf(c)) return c;
  }
  return null;
}

// Frequency map. Better for very large strings
function firstNonRepeated(s) {
  const freq = new Map();
  for (let c of s) freq.set(c, (freq.get(c) || 0) + 1);
  for (let c of s) if (freq.get(c) === 1) return c;
  return null;
}