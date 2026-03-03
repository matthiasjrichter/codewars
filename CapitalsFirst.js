// https://www.codewars.com/kata/55c353487fe3cc80660001d4
//
// Create a function that takes an input String and returns a String, where all the uppercase words of the input String are in front and all the lowercase words at the end. The order of the uppercase and lowercase words should be the order in which they occur.
//
// If a word starts with a number or special character, skip the word and leave it out of the result.
//
// Input String will not be empty.
//
// For an input String: "hey You, Sort me Already!" the function should return: "You, Sort Already! hey me"
//
// function capitalsFirst(str){
//   // ...
// }

function capitalsFirst(str) {
  const first = [], last = [];
  for (const word of str.split(" ")) {
    if (/\P{L}/u.test(word[0])) continue;
    if (word[0] === word[0].toUpperCase()) first.push(word);
    else last.push(word);
  }
  return [...first, ...last].join(" ");
}

// Fun with ternary:
function capitalsFirst(str) {
  const first = [], last = [];
  for (const word of str.split(" ")) {
    if (/\P{L}/u.test(word[0])) continue;
    else (word[0] === word[0].toUpperCase() ? first : last).push(word);
  }
  return [...first, ...last].join(" ");
}

// Even more fun with nested ternary. Don't use in production!
function capitalsFirst(str) {
  const first = [], last = [];
  str.split(" ").forEach((word) => /\P{L}/u.test(word[0]) ? "" : (word[0] === word[0].toUpperCase() ? first : last).push(word))
  return [...first, ...last].join(" ");
}