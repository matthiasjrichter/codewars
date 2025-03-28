// https://www.codewars.com/kata/5b39e91ee7a2c103300018b3
//
// Your task is to remove all consecutive duplicate words from a string, leaving only first words entries. For example:
//
// "alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta"
//
// --> "alpha beta gamma delta alpha beta gamma delta"
// Words will be separated by a single space. There will be no leading or trailing spaces in the string. An empty string (0 words) is a valid input.
//
// function removeConsecutiveDuplicates(string) {
//     return '';
//   }

// .forEach() loop
function removeConsecutiveDuplicates(string) {
  let stringArray = string.split(" ");
  let resultArray = [];
  stringArray.forEach((e) => {
    if (resultArray[resultArray.length - 1] !== e) resultArray.push(e);
  });
  return resultArray.join(" ");
}

// .filter()
const removeConsecutiveDuplicates = (string) => string.split(" ").filter((e, i, a) => e !== a[i - 1]).join(" "); 


//test
removeConsecutiveDuplicates(
  "alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta"
); // "alpha beta gamma delta alpha beta gamma delta"
