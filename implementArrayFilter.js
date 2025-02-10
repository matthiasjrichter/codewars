// https://www.codewars.com/kata/56dd9b84fe5754786f0014f7
//
// What we want to implement is Array.prototype.filter() function, just like the existing Array.prototype.filter(). Another similar function is _.filter() in underscore.js and lodash.js.
//
// The usage will be quite simple, like:
//
// [1, 2, 3, 4, 5].filter(num => num > 3) == [4, 5]
// Of course, the existing Array.prototype.filter() function has been undefined for the purposes of this Kata.
//
// Array.prototype.filter = function (func) {
//     //nothing here, you will feel pretty awesome to write down by yourself
//     //have fun :)
//   }
//

Array.prototype.filter = function (func) {
  const filteredArray = [];
  for (let i = 0; i < this.length; i++) {
    if (func(this[i], i, this)) filteredArray.push(this[i]);
  }
  return filteredArray;
};