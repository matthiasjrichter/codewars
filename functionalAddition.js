// https://www.codewars.com/kata/538835ae443aae6e03000547
//
// Create a function add(n)/Add(n) which returns a function that always adds n to any number
//
// Note for Java: the return type and methods have not been provided to make it a bit more challenging.
//
// var addOne = add(1);
// addOne(3); // 4
//
// var addThree = add(3);
// addThree(3); // 6
//
// function add(n) {
//
// }

function add(n) {
  return function f(m) {
    return m + n;
  };
}

//alternative
const add = (n) =>
  function f(m) {
    return m + n;
  };

//alternative 2
const add = (n) => (m) => n + m;
