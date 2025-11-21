// https://www.codewars.com/kata/5b6c220fa0a661fbf200005d
// 
// You are working at a lower league football stadium and you've been tasked with automating the scoreboard.
// 
// The referee will shout out the score, you have already set up the voice recognition module which turns the ref's voice into a string, but the spoken score needs to be converted into a pair for the scoreboard!
// 
// e.g. "The score is four nil" should return [4,0]
// 
// Either teams score has a range of 0-9, and the ref won't say the same string every time e.g.
// 
// "new score: two three"
//   
// "two two"
//   
// "Arsenal just conceded another goal, two nil"
// Please rate and enjoy!
// 
// function scoreboard(string) {
//   // code here!
// }

const map = new Map([["nil", 0], ["one", 1], ["two", 2], ["three", 3], ["four", 4], ["five", 5], ["six", 6], ["seven", 7], ["eight", 8], ["nine", 9]]);

// Building result with .forEach() and .push()
function scoreboard(string) {
  let arr = string.split(" ");
  let result = [];

  arr.forEach((e) => {
    if (map.has(e)) result.push(map.get(e));
  });

  return result;
}

// .reduce()
function scoreboard(string) {
  let arr = string.split(" ");
  return arr.reduce((res, cur) => map.has(cur) ? [...res, map.get(cur)] : res, []);
}

// One line
const scoreboard = (str) => str.split(" ").reduce((a, c) => map.has(c) ? [...a, map.get(c)] : a, []);

// A bit more performant
const scoreboard = (str) =>
  str.split(" ").reduce((a, c) => {
    if (map.has(c)) a.push(map.get(c));
    return a;
  }, []);

// Comma operator
const scoreboard = (str) => str.split(" ").reduce((a, c) => map.has(c) ? (a.push(map.get(c)), a) : a, []);