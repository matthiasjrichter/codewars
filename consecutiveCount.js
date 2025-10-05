// https://www.codewars.com/kata/59c3e819d751df54e9000098
//
// I want to know the size of the longest consecutive elements of X in Y. You will receive two arguments: items and key. Return the length of the longest segment of consecutive keys in the given items.
//
// Notes:
//
// The items and the key will be either an integer or a string (consisting of letters only)
// If the key does not appear in the items, return 0
// Examples
// 90000, 0           -->  4
// "abcdaaadse", "a"  -->  3
// "abcdaaadse", "z"  -->  0
//
// function getConsectiveItems(items, key){
//
// }

function getConsectiveItems(items, key) {
  let counts = [];
  let count = 0;
  items = String(items);
  key = String(key);
  for (let item of items) {
    if (item === key) count++;
    else count = 0;
    counts.push(count);
  }
  return Math.max(...counts);
}

// Better
function getConsectiveItems(items, key) {
  let maxCount = 0;
  let count = 0;
  items = String(items);
  key = String(key);
  for (let item of items) {
    if (item === key) count++;
    if (count > maxCount) maxCount = count;
    if (item !== key) count = 0;
  }
  return maxCount;
}

// Slightly improved logic
function getConsectiveItems(items, key) {
  let maxCount = 0;
  let count = 0;
  items = String(items);
  key = String(key);
  for (let item of items) {
    if (item === key) {
      count++;
      if (count > maxCount) maxCount = count;
    } else count = 0;
  }
  return maxCount;
}

