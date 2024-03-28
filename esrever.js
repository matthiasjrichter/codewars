// https://www.codewars.com/kata/5413759479ba273f8100003d
//
// Write a function reverse which reverses a list (or in clojure's case, any list-like data structure)
//
// (the dedicated builtin(s) functionalities are deactivated)
//
// reverse = function(array) {
//     // TODO: program me!
//   }

reverse = function (array) {
  let reversed = [];
  array.forEach((e) => {
    reversed.unshift(e);
  });
  return reversed;
};

//test
reverse([1, null, 14, "two"]); // ["two",14,null,1]
