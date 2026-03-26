// https://www.codewars.com/kata/5aba0a08379d20026e0000be
//
// Hepellopo!
//
// Jeringonza is a Spanish language game, similar to Pig Latin, played by children in Spain and all over Hispanic America. It consists of adding the letter p after each vowel (a, e, i, o or u) of a word, and repeating the vowel. For example, jeringonza becomes jeperipingoponzapa (or j-epe-r-ipi-ng-opo-nz-apa).
//
// For the purposes of this kata, the input and output are both strings and no input strings will be empty. Also, the added 'p' should match the case of the vowel. So opo for o and EPE for E.
//
// (If you're interested - there's a few extra components in jeringonza, such as how to deal with stressed vowels, but for the purposes of this kata we're keeping it simple)
//
// Gopoopod lupuck!
//
// function jeringonza() {
//   // your copodede here :)
// }

function jeringonza(str) {
  const result = [], vowels = new Set("aeiouAEIOU");
  for (const char of str) {
    if (vowels.has(char)) {
      if (char === char.toLowerCase()) result.push(char + "p" + char);
      else result.push(char + "P" + char);
    } else result.push(char);
  }
  return result.join("");
}

// More concise
function jeringonza(str) {
  const result = [], vowels = new Set("aeiouAEIOU");
  for (const char of str) {
    if (vowels.has(char)) result.push(char + (char === char.toLowerCase() ? "p" : "P") + char);
    else result.push(char);
  }
  return result.join("");
}

// More readable, I prefer this version
function jeringonza(str) {
  const result = [], vowels = new Set("aeiouAEIOU");

  for (const char of str) {
    const isUpper = char === char.toUpperCase();
    const suffix = isUpper ? "P" : "p";
    result.push(vowels.has(char) ? char + suffix + char : char);
  }
  return result.join("");
}


// RegEx one liner
const jeringonza = str => str.replace(/[aeiou]/gi, c => c + (c === c.toLowerCase() ? 'p' : 'P') + c);