// https://www.codewars.com/kata/5680781b6b7c2be860000036
//
// We want to know the index of the vowels in a given word, for example, there are two vowels in the word super (the second and fourth letters).
//
// So given a string "super", we should return a list of [2, 4].
//
// Some examples:
// Mmmm  => []
// Super => [2,4]
// Apple => [1,5]
// YoMama -> [1,2,4,6]
// NOTES
// Vowels in this context refers to: a e i o u y (including upper case)
// This is indexed from [1..n] (not zero indexed!)

// function vowelIndices(word){
//   //your code here
// }

//forEach()
function vowelIndices(word) {
  const vowels = "aeiouyAEIOUY";
  let result = [];
  [...word].forEach((e, i, a) => {
    if (vowels.includes(e)) {
      result.push(i + 1);
    }
  });
  return result;
}

//for loop
function vowelIndices(word) {
  const vowels = "aeiouyAEIOUY";
  let result = [];
  for (let i = 0; i < word.length; i++) {
    if (vowels.includes(word[i])) {
      result.push(i + 1);
    }
  }
  return result;
}

//for of loop
function vowelIndices(word) {
  const vowels = "aeiouyAEIOUY";
  let result = [];
  let index = 1;
  for (const char of word) {
    if (vowels.includes(char)) {
      result.push(index);
    }
    index++;
  }
  return result;
}

//reduce and regex
const vowelIndices = (word) =>
  [...word].reduce((a, c, i) => (/[aeiouy]/i.test(c) ? [...a, i + 1] : a), []);

//tests
vowelIndices("Super"); //=> [2,4]
vowelIndices("Mmmm"); //=> []
