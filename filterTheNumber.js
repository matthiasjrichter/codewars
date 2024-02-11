// https://www.codewars.com/kata/55b051fac50a3292a9000025
//
// Filter the number
// Oh, no! The number has been mixed up with the text. Your goal is to retrieve the number from the text, can you return the number back to its original state?
//
// Task
// Your task is to return a number from a string.
//
// Details
// You will be given a string of numbers and letters mixed up, you have to return all the numbers in that string in the order they occur.
//
// var filterString = function(value) {
//     //Complete this function :)
//   }

var filterString = function (value) {
  let result = [];
  for (let e of value) {
    if (!isNaN(e)) {
      result.push(e);
    }
  }
  return Number(result.join(""));
};

//filter() and destructuring
function filterString(value) {
  let result = [...value].filter((e) => !isNaN(e));
  return +result.join("");
}

//arrow function
const filterString = (value) => +[...value].filter((e) => !isNaN(e)).join("");

//RegEx
function filterString(value) {
  let result = value.match(/[0123456789]/g).join("");
  return +result;
}

//RegEx 2
const filterString = (value) => +value.match(/[0-9]/g).join("");

//replace() so we don't need an array
function filterString(value) {
  let result = value.replace(/[^0-9]/g, "");
  return +result;
}

//arrow function
const filterString = (value) => +value.replace(/[^0-9]/g, "");

//test
filterString("aa1bb2cc3dd"); //123
