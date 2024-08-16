// https://www.codewars.com/kata/57eb8fcdf670e99d9b000272
//
// Given a string of words, you need to find the highest scoring word.
//
// Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.
//
// For example, the score of abad is 8 (1 + 2 + 1 + 4).
//
// You need to return the highest scoring word as a string.
//
// If two words score the same, return the word that appears earliest in the original string.
//
// All letters will be lowercase and all inputs will be valid.
//
// function high(x){
//
// }

function high(x) {
  let highestScore = [0, ""];
  let arr = x.split(" ");
  arr.forEach((word) => {
    let score = 0;
    for (let char of word) {
      score += char.charCodeAt(0) - 96;
    }
    if (highestScore[0] < score) highestScore = [score, word];
  });
  return highestScore[1];
}

//helper function and reduce()
function calculateWordScore(word) {
  return [...word].reduce((a, c) => a + c.charCodeAt(0) - 96, 0);
}

function high(x) {
  let highestScore = [0, ""];
  let arr = x.split(" ");
  arr.forEach((word) => {
    let score = calculateWordScore(word);
    if (highestScore[0] < score) highestScore = [score, word];
  });
  return highestScore[1];
}
//test
high("man i need a taxi up to ubud"); // 'taxi'
