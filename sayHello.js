// https://www.codewars.com/kata/55955a48a4e9c1a77500005a
//
// Say hello!
//
// Write a function to greet a person. Function will take name as input and greet the person by saying hello. Return null/nil/None if input is empty string or null/nil/None.
//
// Example:
//
// greet("Niks") === "hello Niks!";
// greet("") === null; // Return null if input is empty string
// greet(null) === null; // Return null if input is null
//
// function greet(name) {
//
// }

function greet(name) {
  if (!name) return null;
  return `hello ${name}!`;
}

// arrow function
const greet = (name) => name ? `hello ${name}!` : null;