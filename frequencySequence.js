// https://www.codewars.com/kata/585a033e3a36cdc50a00011c
//
// Your task is to return an output string that translates an input string s by replacing each character in s with a number representing the number of times that character occurs in s and separating each number with the sep character(s).
//
// Example (s, sep --> Output)
//
// "hello world", "-" --> "1-1-3-3-2-1-1-2-1-3-1"
// "19999999"   , ":" --> "1:7:7:7:7:7:7:7"
// "^^^**$"     , "x" --> "3x3x3x2x2x1"
//
// function freqSeq(str, sep) {
//   return ""
// }

function freqSeq(str, sep) {
  let freqMap = new Map();
  for (let char of str) freqMap.set(char, freqMap.get(char) + 1 || 1);
  let result = [];
  for (let char of str) result.push(freqMap.get(char));
  return result.join(sep);
}

// .map() and arrow function
const freqSeq = (str, sep) => {
  let freqMap = new Map();
  for (const char of str) freqMap.set(char, (freqMap.get(char) || 0) + 1);
  return [...str].map(char => freqMap.get(char)).join(sep);
};
