// https://www.codewars.com/kata/57d2807295497e652b000139
//
// #Get the averages of these numbers
//
// Write a method, that gets an array of integer-numbers and return an array of the averages of each integer-number and his follower, if there is one.
//
// Example:
//
// Input:  [ 1, 3, 5, 1, -10]
// Output:  [ 2, 4, 3, -4.5]
// If the array has 0 or 1 values or is null, your method should return an empty array.
//
// Have fun coding it and please don't forget to vote and rank this kata! :-)
//
// function averages(numbers) {
//
// }

// .forEach()
function averages(numbers) {
  if (!numbers) return [];
  let result = [];
  numbers.forEach((e, i, a) => {
    result.push((e + a[i + 1]) / 2);
  });
  result.pop();
  return result;
}

// for loop
function averages(numbers) {
  if (!numbers) return [];
  let result = [];
  for (let i = 0; i < numbers.length - 1; i++) {
    result.push((numbers[i] + numbers[i + 1]) / 2);
  }
  return result;
}

// .map()
function averages(numbers) {
  if (!numbers) return [];
  return numbers.map((e, i, a) => (e + a[i + 1]) / 2).slice(0, -1);
}

// .map() and ternary
const averages = (numbers) => numbers ? numbers.map((e, i, a) => (e + a[i + 1]) / 2).slice(0, -1) : [];