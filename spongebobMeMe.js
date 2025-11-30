// https://www.codewars.com/kata/5982619d2671576e90000017/
//
// Remember the spongebob meme that is meant to make fun of people by repeating what they say in a mocking way?
//
// "Dont use that weird spongebob mocking meme" Me: DonT uSe thAt WeIrd SpoNgEboB MoCkinG MEme
//
// You need to create a function that converts the input into this format, with the output being the same string expect there is a pattern of uppercase and lowercase letters.
//
// Example:
//
// input:  "stop Making spongebob Memes!"
// output: "StOp mAkInG SpOnGeBoB MeMeS!"
//
// function spongeMeme(sentence) {
//
// }

// for of loop and manual toggle.
function spongeMeme(sentence) {
  let result = "";
  let isUpper = true;
  for (let char of sentence) {
    if (isUpper) result += char.toUpperCase();
    else result += char.toLowerCase();
    isUpper = !isUpper;
  }
  return result;
}

// for loop, index based and ternary
function spongeMeme(sentence) {
  let result = "";
  for (let i = 0; i < sentence.length; i++) {
    let char = sentence[i];
    result += i % 2 ? char.toLowerCase() : char.toUpperCase();
  }
  return result;
}

// Destructuring and .map(). Slightly less efficient
const spongeMeme = (sentence) => [...sentence].map((e, i) => i % 2 ? e.toLowerCase() : e.toUpperCase()).join("");



// BONUS: If we wanted it to only alternate on letters
function spongeMeme(sentence) {
  let result = "";
  let isUpper = true;
  for (let char of sentence) {
    if (/\p{L}/u.test(char)) {
      if (isUpper) result += char.toUpperCase();
      else result += char.toLowerCase();
      isUpper = !isUpper;
    }
    result += char;
  }
  return result;
}
