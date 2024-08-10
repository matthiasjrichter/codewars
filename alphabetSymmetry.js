// https://www.codewars.com/kata/59d9ff9f7905dfeed50000b0
//
// Consider the word "abode". We can see that the letter a is in position 1 and b is in position 2. In the alphabet, a and b are also in positions 1 and 2. Notice also that d and e in abode occupy the positions they would occupy in the alphabet, which are positions 4 and 5.
//
// Given an array of words, return an array of the number of letters that occupy their positions in the alphabet for each word. For example,
//
// solve(["abode","ABc","xyzD"]) = [4, 3, 1]
// See test cases for more examples.
//
// Input will consist of alphabet characters, both uppercase and lowercase. No spaces.
//
// Good luck!
//
// function solve(arr){
//     //code
//     };
//

function solve(arr) {
  let result = [];
  arr.forEach((str) => {
    str = str.toLowerCase().split("");
    let count = 0;
    str.forEach((e, i) => {
      if (e.charCodeAt(0) - 97 === i) count++;
    });
    result.push(count);
  });
  return result;
}

//reduce()
function solve(arr) {
  let result = [];
  arr.forEach((str) => {
    str = str.toLowerCase().split("");
    result.push(
      str.reduce((a, c, i) => (c.charCodeAt(0) - 97 === i ? a + 1 : a + 0), 0)
    );
  });
  return result;
}

//map() and reduce()
function solve(arr) {
  return arr.map((str) => {
    str = str.toLowerCase().split("");
    return str.reduce((a, c, i) => (c.charCodeAt(0) - 97 === i ? a + 1 : a + 0), 0);
  });
}

//more concise
function solve(arr) {
    return arr.map((str) => {
      return str.toLowerCase().split("").reduce((a, c, i) => (c.charCodeAt(0) - 97 === i ? a + 1 : a + 0), 0);
    });
  }


//one line for fun
const solve = (arr) => arr.map((str) => str.toLowerCase().split("").reduce((a, c, i) => (c.charCodeAt(0) - 97 === i ? a + 1 : a + 0), 0)
);

//test
solve(["IAMDEFANDJKL", "thedefgh", "xyzDEFghijabc"]); //[6, 5, 7]
