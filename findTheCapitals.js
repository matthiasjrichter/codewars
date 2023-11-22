// https://www.codewars.com/kata/539ee3b6757843632d00026b/javascript
//
// Write a function that takes a single string (word) as argument. The function must return an ordered list containing the indexes of all capital letters in the string.
//
// Example (Input --> Output)
// "CodEWaRs" --> [0,3,4,6]
//
// var capitals = function (word) {
// 	// Write your code here
// };

var capitals = function (word) {
  let result = [];
  for (let char of word) {
    if (char.toUpperCase() === char) {
      result.push(word.indexOf(char));
    }
  }
  return result;
};

//test
capitals("CodEWaRs"); // [0,3,4,6]
