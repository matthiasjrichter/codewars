// https://www.codewars.com/kata/54e9554c92ad5650fe00022b
//
// Write a function that takes an integer in input and outputs a string with currency format.
//
// Integer in currency format is expressed by a string of number where every three characters are separated by comma.
//
// For example:
//
// 123456 --> "123,456"
// Input will always be an positive integer, so don't worry about type checking or negative/float values.
//
// function toCurrency(price){
//   //your code here
// }

function toCurrency(price) {
  let reversed = [...String(price)].reverse();
  let result = [];
  let count = 0;
  for (let i = 0; i < reversed.length; i++) {
    if (count === 3) {
      result.push(`,`);
      count = 0;
    }
    result.push(reversed[i]);
    count++;
  }
  return result.reverse().join("");
}

// More efficient without reversing
function toCurrency(price) {
  let arr = [...String(price)];
  let result = [];
  let count = 0;
  for (let i = arr.length - 1; i >= 0; i--) {
    if (count === 3) {
      result.unshift(`,`);
      count = 0;
    }
    result.unshift(arr[i]);
    count++;
  }
  return result.join("");
}

// Number.toLocaleString()
const toCurrency = (price) => price.toLocaleString('en-US');