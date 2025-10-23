// https://www.codewars.com/kata/52705ed65de62b733f000064
//
// You'll be passed an array of objects (list) - you must sort them in descending order based on the value of the specified property (sortBy).
//
// Example
// When sorted by "a", this:
//
// [
//   {"a": 1, "b": 3},
//   {"a": 3, "b": 2},
//   {"a": 2, "b": 40},
//   {"a": 4, "b": 12}
// ]
// should return:
//
// [
//   {"a": 4, "b": 12},
//   {"a": 3, "b": 2},
//   {"a": 2, "b": 40},
//   {"a": 1, "b": 3}
// ]
// The values will always be numbers, and the properties will always exist.
//
// function sortList (sortBy, list) {
//   return //sorted list
// }

const sortList = (sortBy, list) => list.sort((a, b) => b[sortBy] - a[sortBy]);

// Without mutatuion
const sortList = (sortBy, list) => [...list].sort((a, b) => b[sortBy] - a[sortBy]);

// Alternative but too modern for Codewars/Node v18
const sortList = (sortBy, list) => list.toSorted((a, b) => b[sortBy] - a[sortBy]);