// https://www.codewars.com/kata/56bd9e4b0d0b64eaf5000819
// 
// Your task is to write a function that takes two or more objects and returns a new object which combines all the input objects.
// 
// All input object properties will have only numeric values. Objects are combined together so that the values of matching keys are added together.
// 
// An example:
// 
// const objA = { a: 10, b: 20, c: 30 }
// const objB = { a: 3, c: 6, d: 3 }
// combine(objA, objB) // Returns { a: 13, b: 20, c: 36, d: 3 }
// The combine function should be a good citizen, so should not mutate the input objects.
// 
// function combine() {
//   // Your code here
// }

function combine() {
  const result = {};

  for (const obj of arguments) {
    for (const key in obj) {

      if (result[key] === undefined) {
        result[key] = obj[key];
      } else {
        result[key] += obj[key];
      }

    }
  }

  return result;
}