// https://www.codewars.com/kata/57a4d500e298a7952100035d
// Complete the function which converts hex number (given as a string) to a decimal number.
//
// function hexToDec(hexString){
//     //your code here
//   }

function hexToDec(hexString) {
  return parseInt(hexString, 16);
}

//alternative
const hexToDec = (hexString) => parseInt(hexString, 16);
