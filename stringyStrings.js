// https://www.codewars.com/kata/563b74ddd19a3ad462000054
//
// write me a function stringy that takes a size and returns a string of alternating 1s and 0s.
//
// the string should start with a 1.
//
// a string with size 6 should return :'101010'.
//
// with size 4 should return : '1010'.
//
// with size 12 should return : '101010101010'.
//
// The size will always be positive and will only use whole numbers.
//
// function stringy(size) {
//   // your code here
// }

//for loop
function stringy(size) {
  let result = "";
  for (let i = 0; i < size; i++) {
    if (i % 2 === 0) result += 1;
    else result += 0;
  }
  return result;
}

//arrow function, ternary, while loop
const stringy = (size) => {
  let result = "";
  for (let i = 0; i < size; i++) {
    result += i % 2 === 0 ? 1 : 0;
  }
  return result;
};

//interesting solution
const stringy = (size) => {
  if (size % 2 === 0) return "10".repeat(size / 2);
  return "10".repeat(Math.trunc(size / 2)) + "1";
};

//one line for fun
const stringy = (size) => size % 2 === 0 ? "10".repeat(size / 2) : "10".repeat(Math.trunc(size / 2)) + "1";

//.padEnd()
const stringy = (size) => "".padEnd(size, '10');

//tests
console.log(stringy(6), "101010");
console.log(stringy(3), "101");
