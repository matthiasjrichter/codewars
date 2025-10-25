// https://www.codewars.com/kata/57fd696e26b06857eb0011e7
//
// Vowel harmony is a phenomenon in some languages. It means that "A vowel or vowels in a word are changed to sound the same (thus "in harmony.")" (wikipedia). This kata is based on vowel harmony in Hungarian.
//
// Task:
// Your goal is to create a function dative() (Dative() in C#) which returns the valid form of a valid Hungarian word w in dative case i. e. append the correct suffix nek or nak to the word w based on vowel harmony rules.
//
// Vowel Harmony Rules (simplified)
// When the last vowel in the word is
//
// a front vowel (e, é, i, í, ö, ő, ü, ű) the suffix is -nek
// a back vowel (a, á, o, ó, u, ú) the suffix is -nak
// Examples:
// dative("ablak") == "ablaknak"
// dative("szék") == "széknek"
// dative("otthon") == "otthonnak"
// Preconditions:
// To keep it simple: All words end with a consonant :)
// All strings are unicode strings.
// There are no grammatical exceptions in the tests.
//
// function dative(word) {
//     return '';
// }

function dative(word) {
  const frontVowels = "eéiíöőüű";
  const backVowels = "aáoóuú";
  for (let i = word.length - 1; i >= 0; i--) {
    const char = word[i];
    if (frontVowels.includes(char)) return word + "nek";
    if (backVowels.includes(char)) return word + "nak";
  }
  return word;
}

// A bit more performant with Sets:
function dative(word) {
  const frontVowels = new Set(["e", "é", "i", "í", "ö", "ő", "ü", "ű"]);
  const backVowels = new Set(["a", "á", "o", "ó", "u", "ú"]);
  for (let i = word.length - 1; i >= 0; i--) {
    const char = word[i];
    if (frontVowels.has(char)) return word + "nek";
    if (backVowels.has(char)) return word + "nak";
  }
  return word;
}

// Neat modern syntax:
const frontVowels = new Set("eéiíöőüű");
const backVowels = new Set("aáoóuú");
const dative = (word) => {
  for (let i = word.length; i; i--) {
    const char = word[i - 1];
    if (frontVowels.has(char)) return word + "nek";
    if (backVowels.has(char)) return word + "nak";
  }
  return word;
};

