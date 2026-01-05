// https://www.codewars.com/kata/55e6125ad777b540d9000042
//
// Error Handling is very important in coding and seems to be overlooked or not implemented properly.
//
// #Task
//
// Your task is to implement a function which takes a string as input and return an object containing the properties vowels and consonants. The vowels property must contain the total count of vowels {a,e,i,o,u}, and the total count of consonants {a,..,z} - {a,e,i,o,u}. Handle invalid input and don't forget to return valid ones.
//
// #Input
//
// The input is any random string. You must then discern what are vowels and what are consonants and sum for each category their total occurrences in an object. However you could also receive inputs that are not strings. If this happens then you must return an object with a vowels and consonants total of 0 because the input was NOT a string. Refer to the Example section for a more visual representation of which inputs you could receive and the outputs expected. :)
//
// Example:
// Input: getCount('test')
// Output: {vowels:1,consonants:3}
//
// Input: getCount('tEst')
// Output: {vowels:1,consonants:3}
//
// Input getCount('    ')
// Output: {vowels:0,consonants:0}
//
// Input getCount()
// Output: {vowels:0,consonants:0}
// C#
// A Counter class has been put in the preloaded section taking two parameters Vowels and Consonants this must be the Object you return!
//
// public class Counter {
//     public int Vowels { get; set; }
//     public int Consonants { get; set; }
//     public Counter(int vowels, int consonants)
//     {
//         Vowels = vowels;
//         Consonants = consonants;
//     }
// }
//
// function getCount(words) {
//
// }

function getCount(words) {
  const result = { vowels: 0, consonants: 0 };
  if (typeof words !== "string") return result;

  const vowelSet = new Set("aeiou");
  const consonantSet = new Set("bcdfghjklmnpqrstvwxyz");

  for (const char of words.toLowerCase()) {
    if (vowelSet.has(char)) result.vowels++;
    else if (consonantSet.has(char)) result.consonants++;
  }
  return result;
}

// Safer for unicode characters. Still need to define vowels depending on language. Let's just assume we'll do that at a different step.
const vowels = new Set("aeiouAEIOU");
const letterRegex = /\p{L}/u;

function getCount(words) {
  const result = { vowels: 0, consonants: 0 };
  if (typeof words !== "string") return result;

  for (const char of words) {
    if (letterRegex.test(char)) {
      if (vowels.has(char)) result.vowels++;
      else result.consonants++;
    }
  }
  return result;
}
