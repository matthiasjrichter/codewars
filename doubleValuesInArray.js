// https://www.codewars.com/kata/53951fff369894e4f10007a9
//
// Make the double() function return a new array with each value twice as large as the corresponding value in the passed in array. Your solution must use the map() function of the built-in javascript Array object. If you're not familiar with map(), reading over the documentation may help.
//
// function double(array) {
//     // Use array.map() to return a new array with each value twice
//     // as large as the corresponding value in the passed in array.
// }
// For example:
//
// var someNumbers = [1,2,10,57];
//
// double(someNumbers); // should return [2,4,20,114]
//
// function double(array) {
//     // Use array.map() to return a new array with each value twice
//     // as large as the corresponding value in the passed in array.
// }

function double(array) {
  return array.map((e) => e * 2);
}

// Arrow function
const double = (array) => array.map((e) => e * 2);