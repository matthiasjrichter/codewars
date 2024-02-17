// https://www.codewars.com/kata/572b77262bedd351e9000076
//
// Write a function to get the first element(s) of a sequence. Passing a parameter n (default=1) will return the first n element(s) of the sequence.
//
// If n == 0 return an empty sequence []
//
// Examples
// var arr = ['a', 'b', 'c', 'd', 'e'];
// first(arr) //=> ['a'];
// first(arr, 2) //=> ['a', 'b']
// first(arr, 3) //=> ['a', 'b', 'c'];
// first(arr, 0) //=> [];
//
// function first(arr, n) {
//     // return arr;
//   }

function first(arr, n = 1) {
  return arr.slice(0, n);
}

//arrow function
const first = (arr, n = 1) => arr.slice(0, n);

//tests
first(["a", "b", "c", "d", "e"]); //=> ['a'];
first(["a", "b", "c", "d", "e"], 2); //=> ['a', 'b']
first(["a", "b", "c", "d", "e"], 3); //=> ['a', 'b', 'c'];
first(["a", "b", "c", "d", "e"], 0); //=> [];
