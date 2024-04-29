// https://www.codewars.com/kata/557af4c6169ac832300000ba
//
// Our fruit guy has a bag of fruit (represented as an array of strings) where some fruits are rotten. He wants to replace all the rotten pieces of fruit with fresh ones. For example, given ["apple","rottenBanana","apple"] the replaced array should be ["apple","banana","apple"]. Your task is to implement a method that accepts an array of strings containing fruits should returns an array of strings where all the rotten fruits are replaced by good ones.
//
// Notes
// If the array is null/nil/None or empty you should return empty array ([]).
// The rotten fruit name will be in this camelcase (rottenFruit).
// The returned array should be in lowercase.
//
// function removeRotten(bagOfFruits){
//     // ...
//   }

//map
//forEach
//for loop
//stringify and replace

function removeRotten(bagOfFruits) {
  if (!bagOfFruits) return [];
  return bagOfFruits.map((e) => e.replace("rotten", "").toLowerCase())
}

//arrow function
const removeRotten = (bagOfFruits) => !bagOfFruits ? [] : bagOfFruits.map((e) => e.replace("rotten", "").toLowerCase());

//for-loop and no mutation of input
function removeRotten(bagOfFruits) {
  if (!bagOfFruits) return [];
  let rottenRemoved = [];
  for (let i = 0; i < bagOfFruits.length; i++) {
    rottenRemoved[i] = bagOfFruits[i].replace("rotten", "").toLowerCase();
  }
  return rottenRemoved;
}

//tests
removeRotten(["apple", "banana", "kiwi", "melone", "orange"]); // ["apple","banana","kiwi","melone","orange"]
removeRotten([]);
