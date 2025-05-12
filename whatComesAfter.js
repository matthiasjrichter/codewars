// https://www.codewars.com/kata/590f5b4a7bbb3e246000007d
//
// You will be given two inputs: a string of words and a letter. For each string, return the alphabetic character after every instance of letter(case insensitive).
//
// If there is a number, punctuation or underscore following the letter, it should not be returned.
//
// If letter = 'r':
// "are you really learning Ruby?" # => "eenu"
// "Katy Perry is on the radio!"   # => "rya"
// "Pirates say arrrrrrrrr."       # => "arrrrrrrr"
// "r8 your friend"                # => "i"
// Return an empty string if there are no instances of letter in the given string.
//
// function comes_after(str,l) {
//   //code
// }

function comes_after(str, l) {
  let result = "";
  for (let i = 0; i < str.length; i++) {
    const current = str[i];
    const next = str[i + 1];
    if (current.toLowerCase() === l.toLowerCase()) {
      if (/^[a-zA-Z]$/.test(next)) {
        result += next;
      }
    }
  }
  return result;
}
