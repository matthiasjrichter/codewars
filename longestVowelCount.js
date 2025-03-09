// https://www.codewars.com/kata/59c5f4e9d751df43cf000035
//
// The vowel substrings in the word codewarriors are o,e,a,io. The longest of these has a length of 2. Given a lowercase string that has alphabetic characters only (both vowels and consonants) and no spaces, return the length of the longest vowel substring. Vowels are any of aeiou.
//
// Good luck!
//
// function solve(s){
//     return 0;
//    }

function solve(s) {
  let longest= 0;
  let current = 0;
  const vowels = "aeiouAEIOU";
  for (let char of s) {
    if (vowels.includes(char)) {
      current++;
    } else {
      if (current > longest) longest = current;
      current = 0;
    }
  }
  return current > longest ? current : longest;
}

// using Math.max()
function solve(s) {
  let longest = 0;
  let current = 0;
  const vowels = "aeiouAEIOU";
  for (let char of s) {
    if (vowels.includes(char)) {
      current++;
    } else {
      longest = Math.max(longest, current);
      current = 0;
    }
  }
  return Math.max(longest, current);
}
