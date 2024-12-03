// https://www.codewars.com/kata/53f1015fa9fe02cbda00111a/
//
// Color Ghost
// Create a class Ghost
//
// Ghost objects are instantiated without any arguments.
//
// Ghost objects are given a random color attribute of "white" or "yellow" or "purple" or "red" when instantiated
//
// ghost = new Ghost();
// ghost.color //=> "white" or "yellow" or "purple" or "red"
//
// var Ghost = function() {
//     // your code goes here
//   };

var Ghost = function () {
  const colors = ["white", "yellow", "purple", "red"];
  this.color = colors[Math.floor(Math.random() * colors.length)];
};
