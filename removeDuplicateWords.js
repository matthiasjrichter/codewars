// https://www.codewars.com/kata/5b39e3772ae7545f650000fc
//
// Your task is to remove all duplicate words from a string, leaving only single (first) words entries.
//
// Example:
//
// Input:
//
// 'alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta'
//
// Output:
//
// 'alpha beta gamma delta'
//
// function removeDuplicateWords (s) {
//     // your perfect code...
//   }

function removeDuplicateWords(s) {
  let arr = s.split(" ");
  let resultArr = [];
  arr.forEach((e) => {
    if (!resultArr.includes(e)) resultArr.push(e);
  });
  return resultArr.join(" ");
}
