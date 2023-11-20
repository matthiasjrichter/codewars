// https://www.codewars.com/kata/55c606e6babfc5b2c500007c/train/javascript
//
// Failed Filter - Bug Fixing #3
// Oh no, Timmy's filter doesn't seem to be working? Your task is to fix the FilterNumber function to remove all the numbers from the string.
//
// var FilterNumbers = function(str) {
//     return str.split('').filter(c => !parseInt(c)).join('');
//   }

//works
var FilterNumbers = function (str) {
    return str.split("").filter((c) => isNaN(Number(c))).join("");
  };
  
//alternative
const FilterNumbers = (str) => [...str].filter((c) => isNaN(+c)).join("");

//with modulo
function FilterNumbers(str) {
  return str.split("").filter((c) => c % 1 !== 0).join("");
}

//regex
const FilterNumbers = (str) => str.replace(/[0-9]/g,"");

//test
FilterNumbers("a1b2c3"); // 'abc'
