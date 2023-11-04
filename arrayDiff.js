// https://www.codewars.com/kata/523f5d21c841566fde000009/train/javascript
//
// Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.
//
// It should remove all values from list a, which are present in list b keeping their order.
//
// arrayDiff([1,2],[1]) == [2]
// If a value is present in b, all of its occurrences must be removed from the other:
//
// arrayDiff([1,2,2,2,3],[2]) == [1,3]
//
// function arrayDiff(a, b) {
//
// }

function arrayDiff(a, b) {
  return a.filter((e) => !b.includes(e));
}

//one line
const arrayDiff = (a, b) => a.filter((e) => !b.includes(e));

//alternative without filter()
function arrayDiff(a, b) {
  let result = [];
  a.map((e) => {
    if (!b.includes(e)) result.push(e);
  });
  return result;
}

//with Set()
function arrayDiff(a, b) {
  let bSet = new Set(b);
  return a.filter((e) => !bSet.has(e));
}

//test
arrayDiff([1, 2, 2, 2, 3], [2]); // [1,3]