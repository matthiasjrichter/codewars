// https://www.codewars.com/kata/5467e4d82edf8bbf40000155
// 
// Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.
// 
// Examples:
// Input: 42145 Output: 54421
// 
// Input: 145263 Output: 654321
// 
// Input: 123456789 Output: 987654321
// 
// function descendingOrder(n){
//   //...
// }

function descendingOrder(n){
    let arr = String(n).split("");
    return Number(arr.sort((a, b) => b - a).join(""));
  }
  
//alternative
const descendingOrder = (n) => +(String(n).split("").sort((a, b) => b - a).join(""));

//test
descendingOrder(42145) //54421