// https://www.codewars.com/kata/coding-meetup-number-15-higher-order-functions-series-find-the-odd-names
//
// You will be given an array of objects representing data about developers who have signed up to attend the next coding meetup that you are organising.
//
// Given the following input array:
//
// var list1 = [
//   { firstName: 'Aba', lastName: 'N.', country: 'Ghana', continent: 'Africa', age: 21, language: 'Python' },
//   { firstName: 'Abb', lastName: 'O.', country: 'Israel', continent: 'Asia', age: 39, language: 'Java' }
// ];
// write a function that when executed as findOddNames(list1) returns only the developers where if you add the ASCII representation of all characters in their first names, the result will be an odd number:
//
// [
//   { firstName: 'Abb', lastName: 'O.', country: 'Israel', continent: 'Asia', age: 39, language: 'Java' }
// ]
// Explanation of the above:
//
// Sum of ASCII codes of letters in 'Aba' is: 65 + 98 + 97 = 260 which is an even number
// Sum of ASCII codes of letters in 'Abb' is: 65 + 98 + 98 = 261 which is an odd number
// Notes:
//
// Preserve the order of the original list.
// Return an empty array [] if there is no developer with an "odd" name.
// The input array and first names will always be valid and formatted as in the example above.
//
// function findOddNames(list) {
//   // thank you for checking out the Coding Meetup kata :)
// }

function findOddNames(list) {
  const sum = (str) => str.split("").reduce((a, c) => a + c.charCodeAt(0), 0);
  let oddNames = [];
  for (let dev of list) {
    if (sum(dev.firstName) % 2 !== 0) oddNames.push(dev);
  }
  return oddNames;
}

// .filter()
function findOddNames(list) {
  const sum = (str) => str.split("").reduce((a, c) => a + c.charCodeAt(0), 0);
  return list.filter((dev) => sum(dev.firstName) % 2 !== 0);
}

// Destructuring and checking for truthy
function findOddNames(list) {
  const sum = (str) => [...str].reduce((a, c) => a + c.charCodeAt(0), 0);
  return list.filter((dev) => sum(dev.firstName) % 2);
}

// One liner for fun
const findOddNames = (list) => list.filter(dev => [...dev.firstName].reduce((a,c) => a + c.charCodeAt(0), 0) % 2);
