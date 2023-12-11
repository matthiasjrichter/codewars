// https://www.codewars.com/kata/517abf86da9663f1d2000003
//
// Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case). The next words should be always capitalized.
//
// Examples
// "the-stealth-warrior" gets converted to "theStealthWarrior"
//
// "The_Stealth_Warrior" gets converted to "TheStealthWarrior"
//
// "The_Stealth-Warrior" gets converted to "TheStealthWarrior"
//
// function toCamelCase(str){
//
// }

/////////////

function toCamelCase(str) {
  if (str === "") return str;
  let arr = str.replaceAll("_", "-").split("-");
  let result = arr.map((e) => (e[0] = e[0].toUpperCase() + e.slice(1)));

  result.splice(0, 1, arr[0]);
  return result.join("");
}

//for loop and .replace() for better browser compatibility
function toCamelCase(str) {
  let arr = str.replace(/_/g, "-").split("-");
  for (let i = 1; i < arr.length; i++) {
    arr[i] = arr[i][0].toUpperCase() + arr[i].slice(1);
  }
  return arr.join("");
}

//test
toCamelCase("the-stealth_warrior"); //-> "theStealthWarrior"
