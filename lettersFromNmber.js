// https://www.codewars.com/kata/589ebcb9926baae92e000001
//
// You have to create a function that converts integer given as string into ASCII uppercase letters or spaces.
//
// All ASCII characters have their numerical order in table.
//
// For example,
//
// from ASCII table, character of number 65 is "A".
// Numbers will be next to each other, So you have to split given number to two digit long integers.
//
// Examples (input -> output)
// '658776' -> 'AWL' (because in ASCII table 'A' is 65, 'W' is 87, 'L' is 76)
// '73327673756932858080698267658369' ->'I LIKE UPPERCASE'
// Good Luck!
//
// function convert(number){
//   // ...Convert integers given as string into ASCII uppercase letters...
// }

function convert(number) {
  let result = "";
  for (let i = 0; result.length < number.length / 2; i += 2) {
    const charCode = number[i] + number[i + 1];
    result += String.fromCharCode(charCode);
  }
  return result;
}

// More concise
function convert(n) {
  let res = "";
  for (let i = 0; res.length < n.length / 2; i += 2) res += String.fromCharCode(n[i] + n[i + 1]);
  return res;
}

// Alternative
function convert(number) {
  let charCodes = [];
  for (let i = 0; charCodes.length < number.length / 2; i += 2) {
    const charCode = number.slice(i, i + 2);
    charCodes.push(charCode);
  }
  return String.fromCharCode(...charCodes);
}

// RegEx
const convert = n => String.fromCharCode(...n.match(/../g));