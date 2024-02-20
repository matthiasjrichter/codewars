// https://www.codewars.com/kata/59a96d71dbe3b06c0200009c
//
// I will give you an integer. Give me back a shape that is as long and wide as the integer. The integer will be a whole number between 1 and 50.
//
// Example
// n = 3, so I expect a 3x3 square back just like below as a string:
//
// +++
// +++
// +++
//
// function generateShape(integer){
//
// }

function generateShape(integer) {
  let arr = Array.from({ length: integer });
  arr.fill("+".repeat(integer));
  return arr.join("\n");
}

//arrow function
const generateShape = (integer) => Array.from({ length: integer }).fill("+".repeat(integer)).join("\n");

//spread syntax
const generateShape = (integer) => [...Array(integer)].fill("+".repeat(integer)).join("\n");

//trim() to remove last line break
function generateShape(integer) {
  return ("+".repeat(integer) + "\n").repeat(integer).trim();
}


//test
generateShape(3); // "+++\n+++\n+++"
