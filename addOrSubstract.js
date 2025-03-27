// https://www.codewars.com/kata/5809b62808ad92e31b000031
//
// In this kata, you will do addition and subtraction on a given string. The return value must be also a string.
//
// Note: the input will not be empty.
//
// Examples
// "1plus2plus3plus4"  --> "10"
// "1plus2plus3minus4" -->  "2"
//
// function calculate(str) {
//     //your code here...
//     return str;
//     }

function calculate(str) {
  str = str.replaceAll("plus", "+").replaceAll("minus", "-");
  let cur = "";
  let arr = [];
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "+" || str[i] === "-") {
      arr.push(cur);
      cur = "";
    }
    cur += str[i];
  }
  arr.push(cur);

  let result = Number(arr[0]);
  for (let i = 1; i < arr.length; i++) {
    let num = arr[i];
    if (num[0] === "+") result += Number(num.slice(1));
    if (num[0] === "-") result -= Number(num.slice(1));
  }
  return String(result);
}

// Test
calculate("1plus20plus3minus4"); // "20"
