// https://www.codewars.com/kata/572b6b2772a38bc1e700007a
//
// You'll be given a string, and have to return the sum of all characters as an int. The function should be able to handle all printable ASCII characters.
//
// Examples:
//
// uniTotal("a") == 97
// uniTotal("aaa") == 291
//
// function uniTotal (string) {
//     // total up dem unicodes!
//     }

function uniTotal(string) {
  let result = 0;
  for (const n of string) {
    result += n.charCodeAt(0);
  }
  return result;
}

//alternative
function uniTotal(string) {
  return string.split("").reduce((a, c) => a + c.charCodeAt(0), 0);
}

//arrow function
const uniTotal = (string) => [...string].reduce((a, c) => a + c.charCodeAt(0), 0);

//test
uniTotal("aaa"); //== 291
