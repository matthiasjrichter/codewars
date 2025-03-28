// https://www.codewars.com/kata/580751a40b5a777a200000a1
//
// vowelOne
// Write a function that takes a string and outputs a strings of 1's and 0's where vowels become 1's and non-vowels become 0's.
//
// All non-vowels including non alpha characters (spaces,commas etc.) should be included.
//
// Examples:
//
// vowelOne( "abceios" ) // "1001110"
//
// vowelOne( "aeiou, abc" ) // "1111100100"
// function vowelOne(s){
//     // ...
//   }

function vowelOne(s) {
  const vowels = "aeiouAEIOU";
  let result = "";
  for (let char of s) {
    if (vowels.includes(char)) result += 1;
    else result += 0;
  }
  return result;
}

// ternary and arrow function
const vowelOne = (s) => {
  const vowels = "aeiouAEIOU";
  let result = "";
  for (let char of s) result += vowels.includes(char) ? 1 : 0;
  return result;
};

// test
vowelOne("aeiou, abc"); // "1111100100"