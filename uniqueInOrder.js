// https://www.codewars.com/kata/54e6533c92449cc251001667
//
// Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.
//
// For example:
//
// uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
// uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
// uniqueInOrder([1,2,2,3,3])       == [1,2,3]
//
// var uniqueInOrder=function(iterable){
//   //your code here - remember iterable can be a string or an array
// }

var uniqueInOrder = function (iterable) {
  let result = [];
  for (let i = 0; i < iterable.length; i++) {
    if (iterable[i] !== iterable[i - 1]) {
      result.push(iterable[i]);
    }
  }
  return result;
};

//using spread to make sure we have an array, then filter().
function uniqueInOrder(iterable) {
  return [...iterable].filter((e, i, a) => e !== a[i - 1]);
}

//alternative
const uniqueInOrder = (iterable) => [...iterable].filter((e, i, a) => e !== a[i - 1]);

//test
uniqueInOrder("AAAABBBCCDAABBB"); // ['A', 'B', 'C', 'D', 'A', 'B']
uniqueInOrder("ABBCcAD"); // ['A', 'B', 'C', 'c', 'A', 'D']
uniqueInOrder([1, 2, 2, 3, 3]); // [1,2,3]