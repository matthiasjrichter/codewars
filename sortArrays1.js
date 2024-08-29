// https://www.codewars.com/kata/51f41b98e8f176e70d0002a8/javascript
// 
// Just a simple sorting usage. Create a function that returns the elements of the input-array / list sorted in lexicographical order.
// 
// // input: names - unsorted array
// // output: sorted array
// sortme = function( names ){
// }

const sortme = (names) => names.sort();

//without mutating the input:
const sortme = (names) => [...names].sort();

//test
sortme(['one', 'two', 'three' ]) // ["one", "three", "two"]