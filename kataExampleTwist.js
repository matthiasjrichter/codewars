// https://www.codewars.com/kata/525c1a07bb6dda6944000031/javascript
//
// This is an easy twist to the example kata (provided by Codewars when learning how to create your own kata).
//
// Add the value "codewars" to the array websites 1,000 times.
//
// // add the value "codewars" to the websites array 1,000 times
// var websites = []

// add the value "codewars" to the websites array 1,000 times

//for loop
var websites = [];
function add() {
  for (let i = 1000; i > 0; i--) {
    websites.push("codewars");
  }
  return websites;
}
add();

//while loop
var websites = [];
function add() {
  let count = 1000;
  while (count > 0) {
    websites.push("codewars");
    count--;
  }
  return websites;
}
add();

//fill()
var websites = new Array(1000).fill("codewars");
