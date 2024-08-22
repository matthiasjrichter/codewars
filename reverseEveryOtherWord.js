// https://www.codewars.com/kata/58d76854024c72c3e20000de
//
// Reverse every other word in a given string, then return the string. Throw away any leading or trailing whitespace, while ensuring there is exactly one space between each word. Punctuation marks should be treated as if they are a part of the word in this kata.
//
// function reverse(str){
//     //WRITE SOME MAGIC
//   }

function reverse(str) {
    let wordArr = str.split(" ");
    return wordArr
      .map((e, i) => {
        if (i % 2 !== 0) return [...e].reverse().join("");
        return e;
      })
      .join(" ")
      .trim();
  }
  
//arrow function and ternary
const reverse = (str) => str.split(" ").map((e, i) => i % 2 !== 0 ? [...e].reverse().join("") : e).join(" ").trim();

//trim() early return
function reverse(str) {
    if (str.trim().length === 0) return ""
    let wordArr = str.split(" ");
    return wordArr
      .map((e, i) => {
        if (i % 2 !== 0) return [...e].reverse().join("");
        return e;
      })
      .join(" ")
  }

//early trim() arrow function
const reverse = (str) => str.trim().length === 0 ? "" : str.split(" ").map((e, i) => i % 2 !== 0 ? [...e].reverse().join("") : e).join(" ");

//test
reverse("Reverse this string, please!"); // "Reverse siht string, !esaelp"
