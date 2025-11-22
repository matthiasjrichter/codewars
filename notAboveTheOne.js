// https://www.codewars.com/kata/5b5097324a317afc740000fe/
//
// Task
// Implement a function which finds the numbers less than 2, and the indices of numbers greater than 1 in the given sequence, and returns them as a pair of sequences.
//
// Return a nested array or a tuple depending on the language:
//
// The first sequence being only the 1s and 0s from the original sequence.
// The second sequence being the indexes of the elements greater than 1 in the original sequence.
// Examples
// [ 0, 1, 2, 1, 5, 6, 2, 1, 1, 0 ] => [ [ 0, 1, 1, 1, 1, 0 ], [ 2, 4, 5, 6 ] ]
// Please upvote and enjoy!
//
// function binaryCleaner(arr) {
//   //
// }

// classic for loop
function binaryCleaner(arr) {
  let less2 = [];
  let greater2 = [];

  for (let i = 0; i < arr.length; i++) {
    let num = arr[i]
    if (num < 2) less2.push(num);
    else greater2.push(i);
  };

  return [less2, greater2];
}

// .forEach() and destructuring
function binaryCleaner(arr) {
  let [less2, greater2] = [[], []];

  arr.forEach((num, i) => {
    if (num < 2) less2.push(num);
    else greater2.push(i);
  });

  return [less2, greater2];
}

// Ternary
function binaryCleaner(arr) {
  let res = [[], []];
  arr.forEach((e, i) => (e < 2 ? res[0].push(e) : res[1].push(i)));
  return res;
}

// One line with comma operator. More for fun than for production
const binaryCleaner = (arr) => arr.reduce((a, c, i) => (c < 2 ? a[0].push(c) : a[1].push(i), a), [[], []]);