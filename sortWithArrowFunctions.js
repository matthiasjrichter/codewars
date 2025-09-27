// https://www.codewars.com/kata/559f3e20f4f29869cf0000ea/
//
// Order People by age Using Arrow Function
// Sort and Order people by their age using Arrow Functions
// Task
// Your task is to order a list containg people objects by age using the new Javascript Arrow Functions
// Input
// Input will be a valid array with People objects containing an Age and Name
// Output
// Output will be a valid sorted array with People objects sorted by Age in ascending order
// Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions
//
// var OrderPeople = function(people){
//   return people.sort( => ); //complete this function
// }

var OrderPeople = function (people) {
  return people.sort((a, b) => a.age - b.age);
};

// More concise:
const OrderPeople = (people) => people.sort((a, b) => a.age - b.age);
