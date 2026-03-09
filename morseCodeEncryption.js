// https://www.codewars.com/kata/55b8c0276a7930249e00003c
//
// Write a function that will encrypt a given sentence into International Morse Code, both the input and out puts will be strings.
//
// Characters should be separated by a single space. Words should be separated by a triple space.
//
// For example, "HELLO WORLD" should return -> ".... . .-.. .-.. --- .-- --- .-. .-.. -.."
//
// To find out more about Morse Code follow this link: https://en.wikipedia.org/wiki/Morse_code
//
// A preloaded object/dictionary/hash called CHAR_TO_MORSE will be provided to help convert characters to Morse Code.
//
// function encryption(message) {
//   //YourCodeHere
//   //CHAR_TO_MORSE preloaded to convert characters into Morse code
// }

function encryption(message) {
  const getMorseWord = (word) => word.split("").map((char) => CHAR_TO_MORSE[char]).join(" ");
  const wordsArr = message.split(" "), result = [];
  wordsArr.forEach((word) => result.push(getMorseWord(word)));
  return result.join("   ");
}

// More concise
function encryption(message) {
  const getMorseWord = (word) => word.split("").map((char) => CHAR_TO_MORSE[char]).join(" ");
  return message.split(" ").map((word) => getMorseWord(word)).join("   ");
}

// One line for fun
const encryption = m => m.split(" ").map((w) => w.split("").map((c) => CHAR_TO_MORSE[c]).join(" ")).join("   ");