// https://www.codewars.com/kata/541da001259d9ca85d000688/
//
// In this kata, you will write an arithmetic list which is basically a list that contains consecutive terms in the sequence.
// You will be given three parameters :
//
// first the first term in the sequence
// c the constant that you are going to ADD ( since it is an arithmetic sequence...)
// l the number of terms that should be returned
// Useful link: Sequence
//
// Be sure to check out my Arithmetic sequence Kata first ;)
// Don't forget about the indexing pitfall ;)
//
// function seqlist(first, c, l) {
//   // Thou shalt begin !
// }

function seqlist(first, c, l) {
  let result = [];
  for (let i = first; result.length < l; i += c) {
    result.push(i);
  }
  return result;
}

// Array.from()
const seqlist = (first, c, l) => Array.from({ length: l }, (_, i) => first + i * c);

// Spread
const seqlist = (first, c, l) => [...Array(l)].map((_, i) => first + i * c);
