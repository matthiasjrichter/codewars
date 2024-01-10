// https://www.codewars.com/kata/5848565e273af816fb000449
// 
// Acknowledgments:
// I thank yvonne-liu for the idea and for the example tests :)
// 
// Description:
// Encrypt this!
// 
// You want to create secret messages which can be deciphered by the Decipher this! kata. Here are the conditions:
// 
// Your message is a string containing space separated words.
// You need to encrypt each word in the message using the following rules:
// The first letter must be converted to its ASCII code.
// The second letter must be switched with the last letter
// Keepin' it simple: There are no special characters in the input.
// Examples:
// encryptThis("Hello") === "72olle"
// encryptThis("good") === "103doo"
// encryptThis("hello world") === "104olle 119drlo"
// 
// var encryptThis = function(text) {
//   // Implement me! :)
// }

const encryptThis = (text) => text.split(" ").map((e) => e.length === 1 ? e.charCodeAt(0) : e.length === 2 ? e.charCodeAt(0) + e[1] : e.charCodeAt(0) + e[e.length - 1] + e.slice(2, e.length - 1) + e[1]).join(" ")

//more readable:
function encryptThis(text) {
  return text.split(" ")
    .map((e) => {
      if (e.length === 1) return e.charCodeAt(0);
      if (e.length === 2) return e.charCodeAt(0) + e[1];
      return e.charCodeAt(0) + e[e.length - 1] + e.slice(2, e.length - 1) + e[1];
    })
    .join(" ");
}

//test
encryptThis("A wise old owl lived in an oak") // "65 119esi 111dl 111lw 108dvei 105n 97n 111ka");
encryptThis("A") // "65"
encryptThis("hello world") // "104olle 119drlo"