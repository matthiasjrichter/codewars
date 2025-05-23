// https://www.codewars.com/kata/592fd8f752ee71ac7e00008a
//
// Your are given a string. You must replace any occurence of the sequence coverage by covfefe, however, if you don't find the word coverage in the string, you must add covfefe at the end of the string with a leading space.
//
// For the languages where the string is mutable (such as ruby), don't modify the given string, otherwise this will break the test cases.
//
// function covfefe(str){
//     //covfefe !
//   }

function covfefe(str) {
  if (!str.includes("coverage")) return str + " covfefe";
  return str.replaceAll("coverage", "covfefe");
}

// Arrow function, ternary and template literal
const covfefe = (str) => str.includes("coverage") ? str.replaceAll("coverage", "covfefe") : `${str} covfefe`;