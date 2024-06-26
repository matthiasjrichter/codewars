// https://www.codewars.com/kata/55d410c492e6ed767000004f
//
// Write a function
//
// vowel2index(str)
// that takes in a string and replaces all the vowels [a,e,i,o,u] with their respective positions within that string.
// E.g:
//
// vowel2index('this is my string') == 'th3s 6s my str15ng'
// vowel2index('Codewars is the best site in the world') == 'C2d4w6rs 10s th15 b18st s23t25 27n th32 w35rld'
// vowel2index('') == ''
// Your function should be case insensitive to the vowels.
//
// function vowel2index(str) {
//     //code me
//  }
//

//forEach()
function vowel2index(str) {
  let vowels = "aeiouAEIOU";
  let switched = "";
  [...str].forEach((e, i) => {
    if (vowels.includes(e)) switched += i + 1;
    else switched += e;
  });
  return switched;
}

//map() and ternary
function vowel2index(str) {
  let vowels = "aeiouAEIOU";
  return [...str].map((e, i) => (vowels.includes(e) ? i + 1 : e)).join("");
}

//RegExp
const vowel2index = (str) => str.replace(/[aeiou]/gi, (_, i) => i + 1);

//test
vowel2index("Codewars is the best site in the world"); //'C2d4w6rs 10s th15 b18st s23t25 27n th32 w35rld'
