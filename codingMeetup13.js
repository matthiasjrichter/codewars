// https://www.codewars.com/kata/coding-meetup-number-13-higher-order-functions-series-is-the-meetup-language-diverse
//
// You will be given an array of objects representing data about devs who have signed up to attend the next web development meetup that you are organising. Three programming languages will be represented: Python, Ruby and JavaScript.
//
// Your task is to return either:
//
// true if the number of meetup participants representing any of the three programming languages is ** at most 2 times higher than the number of devs representing any of the remaining programming languages**; or
// false otherwise.
// For example, given the following input array:
//
// var list1 = [
//   { firstName: 'Daniel', lastName: 'J.', country: 'Aruba', continent: 'Americas', age: 42, language: 'Python' },
//   { firstName: 'Kseniya', lastName: 'T.', country: 'Belarus', continent: 'Europe', age: 22, language: 'Ruby' },
//   { firstName: 'Sou', lastName: 'B.', country: 'Japan', continent: 'Asia', age: 43, language: 'Ruby' },
//   { firstName: 'Hanna', lastName: 'L.', country: 'Hungary', continent: 'Europe', age: 95, language: 'JavaScript' },
//   { firstName: 'Jayden', lastName: 'P.', country: 'Jamaica', continent: 'Americas', age: 18, language: 'JavaScript' },
//   { firstName: 'Joao', lastName: 'D.', country: 'Portugal', continent: 'Europe', age: 25, language: 'JavaScript' }
// ];
// your function should return false as the number of JavaScript devs (3) is 3 times higher than the number of Python devs (1). It can't be more than 2 times higher to be regarded as language-diverse.
//
// Notes:
//
// The strings representing all three programming languages will always be formatted in the same way (e.g. 'JavaScript' will always be formatted with upper-case 'J' and 'S'.
// The input array will always be valid and formatted as in the example above.
// Each of the 3 programming languages will always be represented.
//
//
// function isLanguageDiverse(list) {
//   // thank you for checking out the Coding Meetup kata :)
// }

function isLanguageDiverse(list) {
  let counts = new Map();
  for (let dev of list) {
    let count = counts.get(dev.language) || 0;
    counts.set(dev.language, count + 1);
  }
  let sorted = [...counts].sort((a, b) => b[1] - a[1]);
  let [max, min] = [sorted[0][1], sorted[sorted.length - 1][1]];

  return max <= min * 2;
}

// More concise
function isLanguageDiverse(list) {
  let counts = new Map();
  for (let dev of list) counts.set(dev.language, (counts.get(dev.language) || 0) + 1);

  let sorted = [...counts].sort((a, b) => b[1] - a[1]);
  let [max, min] = [sorted.at(0)[1], sorted.at(-1)[1]];

  return max <= min * 2;
}

// Array.from() to only sort the values
function isLanguageDiverse(list) {
  let counts = new Map();
  for (let dev of list) counts.set(dev.language, (counts.get(dev.language) || 0) + 1);

  let sorted = Array.from(counts.values()).sort((a, b) => b - a);
  let [max, min] = [sorted.at(0), sorted.at(-1)];

  return max <= min * 2;
}

// Spread operator
function isLanguageDiverse(list) {
  let counts = new Map();
  for (let dev of list) counts.set(dev.language, (counts.get(dev.language) || 0) + 1);

  let sorted = [...counts.values()].sort((a, b) => b - a);
  let [max, min] = [sorted.at(0), sorted.at(-1)];

  return max <= min * 2;
}

// More efficient by avoiding sorting
function isLanguageDiverse(list) {
  let counts = new Map();
  for (let dev of list) counts.set(dev.language, (counts.get(dev.language) || 0) + 1);

  let values = counts.values();
  let min = Infinity, max = -Infinity;

  for (let count of values) {
    if (count < min) min = count;
    if (count > max) max = count;
  }

  return max <= min * 2;
}