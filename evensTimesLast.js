// https://www.codewars.com/kata/5a1a9e5032b8b98477000004/
//
// Given a sequence of integers, return the sum of all the integers that have an even index (odd index in COBOL), multiplied by the integer at the last index.
//
// Indices in sequence start from 0.
//
// If the sequence is empty, you should return 0.
//
// function evenLast(numbers) {
//     // Good luck
//   }

// .forEach()
function evenLast(numbers) {
  if (!numbers.length) return 0;
  let sum = 0;
  numbers.forEach((e, i) => {
    if (i % 2 === 0) sum += e;
  });
  return sum * numbers.pop();
}

// .reduce()
function evenLast(numbers) {
  if (!numbers.length) return 0;
  let sum = numbers.reduce(
    (acc, cur, idx) => (idx % 2 === 0 ? acc + cur : acc),
    0
  );
  return sum * numbers[numbers.length - 1];
}

// arrow function
const evenLast = (numbers) =>
  !numbers.length
    ? 0
    : numbers.reduce((acc, cur, idx) => (idx % 2 ? acc : acc + cur), 0) *
      numbers[numbers.length - 1];

// alternative using .at(-1) to get last element
const evenLast = (numbers) =>
  numbers.length
    ? numbers.reduce((acc, cur, idx) => (idx % 2 ? acc : acc + cur), 0) *
    numbers.at(-1)
    : 0;

// single line for fun
const evenLast = (n) => n.length ? n.reduce((a, c, i) => (i % 2 ? a : a + c), 0) * n.at(-1) : 0;

// test
evenLast([2, 3, 4, 5]); // 30
