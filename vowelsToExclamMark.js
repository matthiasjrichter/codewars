// https://www.codewars.com/kata/57fb09ef2b5314a8a90001ed/train/javascript
// Description:
// Replace all vowel to exclamation mark in the sentence. aeiouAEIOU is vowel.
// 
// Examples
// replace("Hi!") === "H!!"
// replace("!Hi! Hi!") === "!H!! H!!"
// replace("aeiou") === "!!!!!"
// replace("ABCDE") === "!BCD!"

function replace(s){
    return s.replaceAll("a","!").replaceAll("e","!").replaceAll("i","!").replaceAll("o","!").replaceAll("u","!").replaceAll("A","!").replaceAll("E","!").replaceAll("I","!").replaceAll("O","!").replaceAll("U","!")
  }

//alternative
const replace = s => s.replaceAll("a","!").replaceAll("e","!").replaceAll("i","!").replaceAll("o","!").replaceAll("u","!").replaceAll("A","!").replaceAll("E","!").replaceAll("I","!").replaceAll("O","!").replaceAll("U","!")

