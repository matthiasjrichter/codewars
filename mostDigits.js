// https://www.codewars.com/kata/58daa7617332e59593000006/
//
// Find the number with the most digits.
//
// If two numbers in the argument array have the same number of digits, return the first one in the array.
//
// function findLongest(array){
//   // code here
// }

function findLongest(array) {
  let strings = array.map(String);
  let result = "";
  strings.forEach((e) => {
    if (e.length > result.length) {
      result = e;
    }
  });
  return Number(result);
}

//for loop
function findLongest(array) {
  let strings = array.map(String);
  let result = "";
  for (let i = 0; i < strings.length; i++) {
    if (strings[i].length > result.length) {
      result = strings[i];
    }
  }
  return +result;
}

//reduce
const findLongest = (array) => +array.map(String).reduce((a, b) => (b.length > a.length ? b : a));

//sort
const findLongest = (array) => array.sort((a, b) => (b+"").length - (a+"").length)[0];

//tests
findLongestfindLongest([9000, 8, 800]); // 9000
findLongest([8, 900, 500]); // 900
