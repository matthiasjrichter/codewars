// https://www.codewars.com/kata/586ec0b8d098206cce001141/
//
// You're familiar with list slicing in Python and know, for example, that:
//
// >>> ages = [12, 14, 63, 72, 55, 24]
// >>> ages[2:4]
// [63, 72]
// >>> ages[2:]
// [63, 72, 55, 24]
// >>> ages[:3]
// [12, 14, 63]
// Write a function inverse_slice that takes three arguments: a list items, an integer a and an integer b. The function should return a new list with the slice specified by items[a:b] excluded.
//
// For example:
//
// >>>inverse_slice([12, 14, 63, 72, 55, 24], 2, 4)
// [12, 14, 55, 24]
// Input domain:
//
// items will always be a valid sequence.
// b will always be greater than a.
// a will always be greater than or equal to zero.
// a will always be less than the length of items.
// b may be greater than the length of items.
//
// function inverseSlice(items, a, b) {
//   return ;
// }

// This passes the tests even though it modifies the original array
function inverseSlice(items, a, b) {
  items.splice(a, b - a);
  return items;
}

// No mutation:
function inverseSlice(items, a, b) {
  let result = [...items];
  result.splice(a, b - a);
  return result;
}

// .toSpliced() (not working on Codewars due to Node v18)
const inverseSlice = (items, a, b) => items.toSpliced(a, b - a);

// .slice()
const inverseSlice = (items, a, b) => [...items.slice(0, a), ...items.slice(b)];