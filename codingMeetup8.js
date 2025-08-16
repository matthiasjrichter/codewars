// https://www.codewars.com/kata/coding-meetup-number-8-higher-order-functions-series-will-all-continents-be-represented
// 
// You will be given a sequence of objects (associative arrays in PHP) representing data about developers who have signed up to attend the next coding meetup that you are organising.
// 
// Your task is to return:
// 
// true if all of the following continents / geographic continents will be represented by at least one developer: 'Africa', 'Americas', 'Asia', 'Europe', 'Oceania'.
// false otherwise.
// For example, given the following input array:
// 
// var list1 = [
//   { firstName: 'Fatima', lastName: 'A.', country: 'Algeria', continent: 'Africa', age: 25, language: 'JavaScript' },
//   { firstName: 'Agustín', lastName: 'M.', country: 'Chile', continent: 'Americas', age: 37, language: 'C' },
//   { firstName: 'Jing', lastName: 'X.', country: 'China', continent: 'Asia', age: 39, language: 'Ruby' },
//   { firstName: 'Laia', lastName: 'P.', country: 'Andorra', continent: 'Europe', age: 55, language: 'Ruby' },
//   { firstName: 'Oliver', lastName: 'Q.', country: 'Australia', continent: 'Oceania', age: 65, language: 'PHP' },
// ];
// your function should return true as there is at least one developer from the required 5 geographic continents.
// 
// Notes:
// 
// The input array and continent names will always be valid and formatted as in the list above for example 'Africa' will always start with upper-case 'A'.
// 
// function allContinents(list) {
//   // thank you for checking out the Coding Meetup kata :)
// }


function allContinents(list) {
  let continents = new Set(["Africa", "Americas", "Asia", "Europe", "Oceania"]);
  let devsContinents = new Set();
  for (let dev of list) {
    devsContinents.add(dev.continent);
  }
  return [...continents].join() === [...devsContinents].join();
}

// Alternative
function allContinents(list) {
  let continents = new Set(["Africa", "Americas", "Asia", "Europe", "Oceania"]);
  for (let dev of list) {
    continents.delete(dev.continent)
  }
  return continents.size ? false : true
}

// Boolean()
function allContinents(list) {
  let continents = new Set(["Africa", "Americas", "Asia", "Europe", "Oceania"]);
  for (let dev of list) {
    continents.delete(dev.continent)
  }
  return Boolean(!continents.size)
}

// Early return for better performance with very large datasets
function allContinents(list) {
  let continents = new Set(["Africa", "Americas", "Asia", "Europe", "Oceania"]);
  for (let dev of list) {
    continents.delete(dev.continent)
    if (!continents.size) return true
  }
  return false
}

// This one is more readable
function allContinents(list) {
  let continents = new Set(["Africa", "Americas", "Asia", "Europe", "Oceania"]);
  for (let dev of list) {
    continents.delete(dev.continent)
    if (continents.size === 0) return true
  }
  return false
}

// Test
allContinents([
  { firstName: 'Fatima', lastName: 'A.', country: 'Algeria', continent: 'Africa', age: 25, language: 'JavaScript' },
  { firstName: 'Agustín', lastName: 'M.', country: 'Chile', continent: 'Americas', age: 37, language: 'C' },
  { firstName: 'Jing', lastName: 'X.', country: 'China', continent: 'Asia', age: 39, language: 'Ruby' },
  { firstName: 'Laia', lastName: 'P.', country: 'Andorra', continent: 'Europe', age: 55, language: 'Ruby' },
  { firstName: 'Oliver', lastName: 'Q.', country: 'Australia', continent: 'Oceania', age: 65, language: 'PHP' },
]); // true