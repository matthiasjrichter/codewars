// https://www.codewars.com/kata/52efefcbcdf57161d4000091
//
// The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.
//
// What if the string is empty? Then the result should be empty object literal, {}.
//
// function count(string) {
//     // TODO
//     return {};
//   }

function count(string) {
    let charMap = {};
    for (let char of string) {
      charMap.hasOwnProperty(char) ? charMap[char]++ : (charMap[char] = 1);
    }
    return charMap;
  }
  
  count("aba"); //{'a': 2, 'b': 1}
  