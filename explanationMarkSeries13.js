// https://www.codewars.com/kata/57fb142297e0860073000064
//
// Description:
// Count the number of exclamation marks and question marks, return the product.
//
// Examples
// ""          --->   0
// "!"         --->   0
// "!ab? ?"    --->   2
// "!!"        --->   0
// "!??"       --->   2
// "!???"      --->   3
// "!!!??"     --->   6
// "!!!???"    --->   9
// "!???!!"    --->   9
// "!????!!!?" --->  20
//
// function product (string) {
//     //coding and coding....
//     return 0;
//   }

// loop
function product(string) {
  let exclamationMarks = 0;
  let questionMarks = 0;
  for (let i = 0; i <= string.length; i++) {
    if (string[i] === "!") exclamationMarks++;
    if (string[i] === "?") questionMarks++;
  }
  return exclamationMarks * questionMarks;
}

// arrow function and match()
const product = (string) => (string.match(/!/g) || []).length * (string.match(/\?/g) || []).length;

// filter()
const product = (string) => [...string].filter((e) => e === "!").length * [...string].filter((e) => e === "?").length;

// reduce()
const product = (string) => [...string].reduce((count, char) => count + (char === "!" ? 1 : 0), 0) * [...string].reduce((count, char) => count + (char === "?" ? 1 : 0), 0);

// split()
const product = (string) => (string.split("!").length - 1) * (string.split("?").length - 1);

// test
product("hello!??") // 2