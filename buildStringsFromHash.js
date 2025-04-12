// https://www.codewars.com/kata/51c7d8268a35b6b8b40002f2
//
// Complete the solution so that it takes the object (JavaScript/CoffeeScript) or hash (ruby) passed in and generates a human readable string from its key/value pairs.
//
// The format should be "KEY = VALUE". Each key/value pair should be separated by a comma except for the last pair.
//
// Example:
//
// solution({a: 1, b: '2'}) // should return "a = 1,b = 2"
//
// function solution(pairs){
//     // TODO: complete
//   }

// .forEach()
function solution(pairs) {
  let pairsString = "";
  Object.keys(pairs).forEach((key) => {
    pairsString += `,${key} = ${pairs[key]}`;
  });
  return pairsString.slice(1);
}

// arrow function and .map()
const solution = (pairs) => Object.keys(pairs).map(key => `${key} = ${pairs[key]}`).join(',');

// Test
solution({ a: 1, b: "2" }); // should return "a = 1,b = 2"
