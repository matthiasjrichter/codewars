// https://www.codewars.com/kata/581e014b55f2c52bb00000f8
//
// You are given a secret message you need to decipher. Here are the things you need to know to decipher it:
//
// For each word:
//
// the second and the last letter is switched (e.g. Hello becomes Holle)
// the first letter is replaced by its character code (e.g. H becomes 72)
// there are no special characters used, only letters and spaces
// words are separated by a single space
// there are no leading or trailing spaces
// Examples
//
// '72olle 103doo 100ya' --> 'Hello good day'
// '82yade 115te 103o'   --> 'Ready set go'
//
// function decipherThis(str) {
//     //have fun!
//       return '';
//     }

function decipherWord(e) {
  let charCode = e.split(/[^0-9]/g).join("");
  let chars = e.split(/[0-9]/g).join("");
  if (chars.length > 1)
    return (
      String.fromCharCode(charCode) +
      chars.slice(-1) +
      chars.slice(1, -1) +
      chars[0]
    );
  return String.fromCharCode(charCode) + chars.slice(-1);
}

const decipherThis = (str) => str.split(" ").map((e) => decipherWord(e)).join(" ");

//ternary, more variables for better readability, const for immutability, template ltiterals for fun
function decipherWord(e) {
  const charCode = e.split(/[^0-9]/g).join("");
  const chars = e.split(/[0-9]/g).join("");
  const firstChar = String.fromCharCode(charCode);
  const secondChar = chars[0];
  const middleChars = chars.slice(1, -1);
  const lastChar = chars.slice(-1);

  return chars.length > 1
    ? `${firstChar}${lastChar}${middleChars}${secondChar}`
    : `${firstChar}${lastChar}`;
}

const decipherThis = (str) => str.split(" ").map((e) => decipherWord(e)).join(" ");

//test
decipherThis("72olle 103doo 100ya"); // 'Hello good day'
decipherThis("82yade 115te 103o"); // 'Ready set go'
