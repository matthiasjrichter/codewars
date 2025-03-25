// https://www.codewars.com/kata/5b16490986b6d336c900007d
//
// Task
// You are given a dictionary/hash/object containing some languages and your test results in the given languages. Return the list of languages where your test score is at least 60, in descending order of the scores.
//
// Note: the scores will always be unique (so no duplicate values)
//
// Examples
// {"Java": 10, "Ruby": 80, "Python": 65}    -->  ["Ruby", "Python"]
// {"Hindi": 60, "Dutch" : 93, "Greek": 71}  -->  ["Dutch", "Greek", "Hindi"]
// {"C++": 50, "ASM": 10, "Haskell": 20}     -->  []
//
// function myLanguages(results) {
//
// }

function myLanguages(results) {
  let sorted = Object.entries(results).sort((a, b) => b[1] - a[1]);
  let result = [];
  sorted.forEach((e) => {
    if (e[1] >= 60) result.push(e[0]);
  });
  return result;
}

// filter and map
function myLanguages(results) {
  return Object.entries(results).filter((e) => e[1] >= 60).sort((a, b) => b[1] - a[1]).map((e) => e[0]);
}

// arrow function one liner for fun
const myLanguages = (results) => Object.entries(results).filter((e) => e[1] >= 60).sort((a, b) => b[1] - a[1]).map((e) => e[0]);

// destructuring
const myLanguages = (results) => Object.entries(results).filter(([, score]) => score >= 60).sort(([, scoreA], [, scoreB]) => scoreB - scoreA).map(([language]) => language);

// better formatting
const myLanguages = (results) =>
    Object.entries(results)
      .filter(([, score]) => score >= 60)
      .sort(([, scoreA], [, scoreB]) => scoreB - scoreA)
      .map(([language]) => language);


myLanguages({ "Hindi": 60, "Dutch": 93, "Greek": 71, "Haskell": 20 }); // ["Dutch", "Greek", "Hindi"]

