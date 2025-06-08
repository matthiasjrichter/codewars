// https://www.codewars.com/kata/54d418bd099d650fa000032d
//
// Vampire Numbers
// Our loose definition of Vampire Numbers can be described as follows:
//
// 6 * 21 = 126
// # 6 and 21 would be valid 'fangs' for a vampire number as the
// # digits 6, 1, and 2 are present in both the product and multiplicands
//
// 10 * 11 = 110
// # 110 is not a vampire number since there are three 1's in the
// # multiplicands, but only two 1's in the product
// Create a function that can receive two 'fangs' and determine if the product of the two is a valid vampire number.
//
// function vampireTest(a, b) {
//   return false; // fix me
// }

function vampireTest(a, b) {
  let product = a * b;
  return [...String(product)].sort().join("") === [...(String(a) + String(b))].sort().join("");
}

// Arrow function
const vampireTest = (a, b) => [...String(a* b)].sort().join() === [...(String(a) + String(b))].sort().join();
