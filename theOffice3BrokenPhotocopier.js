// https://www.codewars.com/kata/57ed56657b45ef922300002b
//
// The bloody photocopier is broken... Just as you were sneaking around the office to print off your favourite binary code!
//
// Instead of copying the original, it reverses it: '1' becomes '0' and vice versa.
//
// Given a string of binary, return the version the photocopier gives you as a string.
//
// function broken(x){
//
// }

function broken(x) {
  let result = "";
  for (let n of x) {
    if (n === "0") {
      result += "1";
    } else {
      result += "0";
    }
  }
  return result;
}

//alternative
function broken(x) {
  let result = "";
  for (let n of x) {
    if (n === "0") result += "1";
    else result += "0";
  }
  return result;
}

//ternary
function broken(x) {
  let result = "";
  for (let n of x) {
    n === "0" ? result += "1" : result += "0";
  }
  return result;
}

//map()
const broken = (x) => [...x].map((e) => e == 0 ? 1 : 0).join("");

//test
broken("100010"); // "011101"
