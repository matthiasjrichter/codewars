// https://www.codewars.com/kata/5889177bf148eddd150002cc
// 
// In this exercise, you will have to create a function named tiyFizzBuzz. This function will take on a string parameter and will return that string with some characters replaced, depending on the value:
// 
// If a letter is a upper case consonants, replace that character with "Iron".
// If a letter is a lower case consonants or a non-alpha character, do nothing to that character
// If a letter is a upper case vowel, replace that character with "Iron Yard".
// If a letter is a lower case vowel, replace that character with "Yard".
// Ready?
// 
// function tiyFizzBuzz(sentence){
//   
// }

const vowels = new Set("aeiouAEIOU");
const isVowel = char => vowels.has(char);
const isUpperCase = char => char.toUpperCase() === char;
const isChar = char => /\p{L}/u.test(char);

function tiyFizzBuzz(sentence){
  if (!sentence) return sentence;
  let result = "";
  for (const char of sentence){
    if (isUpperCase(char) && !isVowel(char) && isChar(char)) result += "Iron";
    else if (!isUpperCase(char) && !isVowel(char) || !isChar(char)) result += char;
    else if (isUpperCase(char) && isVowel(char)) result += "Iron Yard";
    else if (!isUpperCase(char) && isVowel(char)) result += "Yard";
    else result += char;
  }
  
  return result;
}