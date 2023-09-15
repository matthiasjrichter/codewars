// https://www.codewars.com/kata/514a7ac1a33775cbb500001e
// This function should return an object, but it's not doing what's intended. What's wrong?
// function mystery() {
//     var results =
//       {sanity: 'Hello'};
//     return
//       results;
//   }

function mystery() {
  var results = { sanity: "Hello" };
  return results;
}
//explanation: javascript automagically adds a semicolon after the return, therefor it has to be in the same line

//here is another fun way to do it:
const mystery = () => ({sanity: 'Hello'});