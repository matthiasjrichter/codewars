// https://www.codewars.com/kata/6627696c86b953001280675e
//
// Description:
// Inspired by the emojify custom Python module.
//
// You are given a string made up of chains of emotes separated by 1 space each, with chains having 2 spaces in-between each.
//
// Each emote represents a digit:
//
// :)  | 0
// :D  | 1
// >(  | 2
// >:C | 3
// :/  | 4
// :|  | 5
// :O  | 6
// ;)  | 7
// ^.^ | 8
// :(  | 9
// Each emote chain represents the digits of the ASCII/Unicode code for a character, e.g. :( ;) is 97, which is the ASCII code for 'a'.
//
// Given a such string of emotes, find the string it represents. Example:
//
// ':D :) :/  :D :) :|' is 2 chains: ':D :) :/' and ':D :) :|'.
//
// These represent ASCII codes 104 and 105 respectively, translating to 'hi'.
//
// Input will always be valid. Chains may start with leading zeroes; these are valid and do not change the chain's value.
//
// function deEmojify(emojiString) {
//     // your turn now
//   }

function deEmojify(emojiString) {
  if (!emojiString) {
    return "";
  }

  const emoteToDigit = {
    ":)": 0,
    ":D": 1,
    ">(": 2,
    ">:C": 3,
    ":/": 4,
    ":|": 5,
    ":O": 6,
    ";)": 7,
    "^.^": 8,
    ":(": 9,
  };

  const chains = emojiString.split("  ");
  let decodedString = "";

  for (const chain of chains) {
    const emotes = chain.split(" ");
    let code = 0;

    for (let i = 0; i < emotes.length; i++) {
      code += emoteToDigit[emotes[i]] * Math.pow(10, emotes.length - i - 1);
    }

    decodedString += String.fromCharCode(code);
  }

  return decodedString;
}
