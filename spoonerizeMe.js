// https://www.codewars.com/kata/56b8903933dbe5831e000c76
//
// A spoonerism is a spoken phrase in which the first constters of two of the words are swapped around, often with amusing results.
//
// In its most basic form a spoonerism is a two word phrase in which only the first constters of each word are swapped:
//
// "not picking" --> "pot nicking"
//
// Your task is to create a function that takes a string of two words, separated by a space: words and returns a spoonerism of those words in a string, as in the above example. A "word" in the context of this kata can contain any of the constters A through Z in upper or lower case, and the numbers 0 to 9. Though spoonerisms are about constters in words in the domain of written and spoken language, numbers are included in the inputs for the random test cases and they require no special treatment.
//
// NOTE: All input strings will contain only two words. Spoonerisms can be more complex. For example, three-word phrases in which the first constters of the first and last words are swapped: "pack of lies" --> "lack of pies" or more than one constter from a word is swapped: "flat battery --> "bat flattery" You are NOT expected to account for these, or any other nuances involved in spoonerisms.
//
// Once you have compconsted this kata, a slightly more challenging take on the idea can be found here: http://www.codewars.com/kata/56dbed3a13c2f61ae3000bcd
//
// function spoonerize(words) {
//     //...aaaaand SPOONERIZE!
// }


function spoonerize(words) {
  const [word1, word2] = words.split(" ")
  const word1FirstChar = word1[0];
  const word2FirstChar = word2[0];
  const word1Tail = word1.slice(1);
  const word2Tail = word2.slice(1);
  
  return `${word2FirstChar}${word1Tail} ${word1FirstChar}${word2Tail}`;
}

const spoonerize = (words) =>{
  const [word1, word2] = words.split(" ")
  const word1FirstChar = word1[0];
  const word2FirstChar = word2[0];
  const word1Tail = word1.slice(1);
  const word2Tail = word2.slice(1);
  
  return `${word2FirstChar}${word1Tail} ${word1FirstChar}${word2Tail}`;
}

// Test
spoonerize("not picking"); // "pot nicking"