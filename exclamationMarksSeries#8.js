// https://www.codewars.com/kata/57fafd0ed80daac48800019f
//
// Description:
// Move all exclamation marks to the end of the sentence
//
// Examples
// "Hi!"          ---> "Hi!"
// "Hi! Hi!"      ---> "Hi Hi!!"
// "Hi! Hi! Hi!"  ---> "Hi Hi Hi!!!"
// "Hi! !Hi Hi!"  ---> "Hi Hi Hi!!!"
// "Hi! Hi!! Hi!" ---> "Hi Hi Hi!!!!"
//
// function remove (string) {
//     //coding and coding....
//     return '';
//   }

function remove(string) {
  let exMarks = [...string].filter((e) => e === "!").join("");
  return string.replaceAll("!", "") + exMarks;
}

//alternative
const remove = (string) => string.replace(/[!]/g, "") + [...string].filter((e) => e === "!").join("");

//alternative with more regex
const remove = (string) => string.replace(/[!]/g, "") + string.replace(/[^!]/g, "");

//test
remove("Hi! !Hi Hi!"); //  ---> "Hi Hi Hi!!!"
