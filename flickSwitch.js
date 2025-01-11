// https://www.codewars.com/kata/64fbfe2618692c2018ebbddb
//
// Task
// Create a function that always returns True/true for every item in a given list.
// However, if an element is the word 'flick', switch to always returning the opposite boolean value.
//
// Examples
// ['codewars', 'flick', 'code', 'wars'] ➞ [True, False, False, False]
//
// ['flick', 'chocolate', 'adventure', 'sunshine'] ➞ [False, False, False, False]
//
// ['bicycle', 'jarmony', 'flick', 'sheep', 'flick'] ➞ [True, True, False, False, True]
// Notes
// "flick" will always be given in lowercase.
// A list may contain multiple flicks.
// Switch the boolean value on the same element as the flick itself.
//
// function flickSwitch(arr){
//     return [];
//   }

function flickSwitch(arr) {
  let state = true;
  let result = [];
  arr.forEach((e) => {
    if (e === "flick") {
      if (state) state = false;
      else state = true;
    }
    result.push(state);
  });
  return result;
}