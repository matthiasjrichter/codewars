// https://www.codewars.com/kata/56a946cd7bd95ccab2000055
//
// Your task is simply to count the total number of lowercase letters in a string.
//
// Examples
// "abc" ===> 3
//
// "abcABC123" ===> 3
//
// "abcABC123!@€£#$%^&*()_-+=}{[]|\':;?/>.<,~" ===> 3
//
// "" ===> 0;
//
// "ABC123!@€£#$%^&*()_-+=}{[]|\':;?/>.<,~" ===> 0
//
// "abcdefghijklmnopqrstuvwxyz" ===> 26
//
// function lowercaseCount(str){
//     //How many?
// }

function lowercaseCount(str) {
  let arr = str.match(/[a-z]/g);
  if (!arr) return 0;
  return arr.length;
}

//alternative
const lowercaseCount = (str) => (str.match(/[a-z]/g) || []).length;

//test
lowercaseCount("abcABC123"); // 3
lowercaseCount("ABC123"); // 0