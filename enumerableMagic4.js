// https://www.codewars.com/kata/545993ee52756d98ca0010e1
//
// Create a method none? (JS none) that accepts an array and a block (JS: a function), and returns true if the block (/function) returns true for none of the items in the array. An empty list should return true.
//
// function none(arr, fun){
//     // ...
//   }

// loop
function none(arr, fun) {
  for (let i = 0; i < arr.length; i++) {
    if (fun(arr[i])) {
      return false;
    }
  }
  return true;
}

// .some()
function none(arr, fun) {
  if (arr.some((e) => fun(e))) return false;
  return true;
}

// arrow function
const none = (arr, fun) => !arr.some((e) => fun(e));

// even more concise
const none = (arr, fun) => !arr.some(fun);