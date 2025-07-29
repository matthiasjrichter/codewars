// https://www.codewars.com/kata/57faf32df815ebd49e000117/
//
// Task
// Remove all exclamation marks from the end of words. Words are separated by a single space. There are no exclamation marks within a word.
//
// Examples
// "Hi!" --> "Hi"
// "Hi!!!" --> "Hi"
// "!Hi" --> "!Hi"
// "!Hi!" --> "!Hi"
// "Hi! Hi!" --> "Hi Hi"
// "!!!Hi !!hi!!! !hi" --> "!!!Hi !!hi !hi"
//
// function remove (string) {
//   //coding and coding....
//   return '';
// }

function remove(string) {
  let result = [];
  let wordArr = string.split(" ");

  wordArr.forEach((word) => {
    let arr = word.split("");
    while (arr[arr.length - 1] === "!") arr.pop();
    result.push(arr.join(""));
  });

  return result.join(" ");
}

// .map()
function remove(string) {
  return string
    .split(" ")
    .map((word) => {
      let arr = word.split("");
      while (arr[arr.length - 1] === "!") arr.pop();
      return arr.join("");
    })
    .join(" ");
}

// RegExp
const remove = (string) => string.replace(/!+$/, "");
