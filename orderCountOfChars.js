// https://www.codewars.com/kata/57a6633153ba33189e000074
//
// Count the number of occurrences of each character and return it as a (list of tuples) in order of appearance. For empty output return (an empty list).
//
// Consult the solution set-up for the exact data structure implementation depending on your language.
//
// Example:
//
// orderedCount("abracadabra") == [['a', 5], ['b', 2], ['r', 2], ['c', 1], ['d', 1]]
//
// const orderedCount = function (text) {
//   // Implement me!
//   return [];
// }


const orderedCount = function (text) {
  let charMap = new Map();
  for (let char of text) {
    charMap.has(char) ? charMap.set(char, charMap.get(char) + 1) : charMap.set(char, 1);
  }
  return Array.from(charMap);
};

// alternative
const orderedCount = (text) => {
  let charMap = new Map();
  for (let char of text) {
    let currentCount = charMap.get(char) || 0;
    charMap.set(char, currentCount + 1);
  }
  return Array.from(charMap);
};

//tests
orderedCount("233312"); // [['2', 2], ['3', 3], ['1', 1 ]]
orderedCount("abracadabra"); // [['a', 5], ['b', 2], ['r', 2], ['c', 1], ['d', 1]]
