// https://www.codewars.com/kata/5639bdcef2f9b06ce800005b
// 
// In this exercise, a string is passed to a method and a new string has to be returned with the first character of each word in the string.
// 
// For example:
// 
// "This Is A Test" ==> "TIAT"
// Strings will only contain letters and spaces, with exactly 1 space between words, and no leading/trailing spaces.
// 
// function makeString(s){
//     // ...
//   }
//   

function makeString(s){
    let sArr = s.split(" ");
    return sArr.map((e) => e[0]).join("")
  }

//arrow function
const makeString = (s) => s.split(" ").map ((e) => e[0]).join("");
//test
makeString("This Is A Test") // "TIAT"