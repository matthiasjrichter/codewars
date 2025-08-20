// https://www.codewars.com/kata/coding-meetup-number-14-higher-order-functions-series-order-the-food
//
// You will be given an array of objects representing data about developers who have signed up to attend the next coding meetup that you are organising.
//
// Your task is to return an object which includes the count of food options selected by the developers on the meetup sign-up form..
//
// For example, given the following input array:
//
// var list1 = [
//   { firstName: 'Noah', lastName: 'M.', country: 'Switzerland', continent: 'Europe', age: 19, language: 'C',
//     meal: 'vegetarian' },
//   { firstName: 'Anna', lastName: 'R.', country: 'Liechtenstein', continent: 'Europe', age: 52, language: 'JavaScript',
//     meal: 'standard' },
//   { firstName: 'Ramona', lastName: 'R.', country: 'Paraguay', continent: 'Americas', age: 29, language: 'Ruby',
//     meal: 'vegan' },
//   { firstName: 'George', lastName: 'B.', country: 'England', continent: 'Europe', age: 81, language: 'C',
//     meal: 'vegetarian' },
// ];
// your function should return the following object (the order of properties does not matter):
//
// { vegetarian: 2, standard: 1, vegan: 1 }
// Notes:
//
// The order of the meals count in the object does not matter.
// The count value should be a valid number.
// The input array will always be valid and formatted as in the example above.
// there are 5 possible meal options and the strings representing the selected meal option will always be formatted in the same way, as follows: 'standard', 'vegetarian', 'vegan', 'diabetic', 'gluten-intolerant'.
//
// function orderFood(list) {
//   // thank you for checking out the Coding Meetup kata :)
// }

// Object
function orderFood(list) {
  let meals = {};
  for (let dev of list) {
    if (Object.hasOwn(meals, dev.meal)) meals[dev.meal]++;
    else meals[dev.meal] = 1;
  }
  return meals;
}

// Storing dev.meal in a variable
function orderFood(list) {
  let meals = {};
  for (let dev of list) {
    let meal = dev.meal;
    if (Object.hasOwn(meals, meal)) meals[meal]++;
    else meals[meal] = 1;
  }
  return meals;
}

// ES6 Map
function orderFood(list) {
  let meals = new Map();
  for (let dev of list) meals.set(dev.meal, (meals.get(dev.meal) || 0) + 1);
  return Object.fromEntries(meals);
}

// Arrow function
const orderFood = (list) => {
  let meals = new Map();
  for (let dev of list) meals.set(dev.meal, (meals.get(dev.meal) || 0) + 1);
  return Object.fromEntries(meals);
};
