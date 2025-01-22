// https://www.codewars.com/kata/545af3d185166a3dec001190
//
// Create a method each_cons that accepts a list and a number n, and returns cascading subsets of the list of size n, like so:
//
// each_cons([1,2,3,4], 2)
//   #=> [[1,2], [2,3], [3,4]]
//
// each_cons([1,2,3,4], 3)
//   #=> [[1,2,3],[2,3,4]]
//
// As you can see, the lists are cascading; ie, they overlap, but never out of order.
//
// function eachCons(arrayay, n) {
// 	return [];
// }


function eachCons(array, n) {
  if (n > array.length) return [];

  let a = array.slice();
  let result = [];
  while (a.length >= n) {
    result.push(a.slice(0, n));
    a.shift();
  }

  return result;
}

// for loop
function eachCons(array, n) {
  if (n > array.length) return [];

  let result = [];
  for (let i = 0; i <= array.length - n; i++) {
    result.push(array.slice(i, i + n));
  }

  return result;
}

// test
eachCons([1, 2, 3, 4], 3); // [[1,2,3],[2,3,4]]
