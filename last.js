// https://www.codewars.com/kata/541629460b198da04e000bb9
//
// Find the last element of the given argument(s). If a single argument is passed and is a list/array or a string, return its last element. It is guaranteed that there will be at least one argument and that single-argument arrays/lists/strings will not be empty.
//
// Examples
// last(5)               ==> 5
// last([1, 2, 3, 4])    ==>  4
// last("xyz")           ==> "z"
// last(1, 2, 3, 4)      ==>  4
// last([1, 2], [3, 4])  ==>  [3, 4]
// last([[1, 2], [3, 4]])  ==>  [3, 4]
//
// function last() {
// }

function last(first, ...rest) {
  if (rest.length) return rest.at(-1);
  return first.length ? first.at(-1) : first;
}

// One line for fun
const last = (first, ...rest) => rest.length ? rest.at(-1) : first.length ? first.at(-1) : first;