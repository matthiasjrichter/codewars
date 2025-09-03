// https://www.codewars.com/kata/53573877d5493b4d6e00050c/javascript
//
// Complete the method that takes a sequence of objects with two keys each: country or state, and capital. Keys may be symbols or strings.
//
// The method should return an array of sentences declaring the state or country and its capital.
//
// Examples
// state_capitals = [{state: 'Maine', capital: 'Augusta'}]
// capital(state_capitals)[0] // returns "The capital of Maine is Augusta"
//
// country_capitals = [{'country' : 'Spain', 'capital' : 'Madrid'}]
// capital(country_capitals)[0]  // returns "The capital of Spain is Madrid"
//
// mixed_capitals: [{"state" : 'Maine', capital: 'Augusta'}, {country: 'Spain', "capital" : "Madrid"}]
// capital(mixed_capitals)[1] // returns "The capital of Spain is Madrid"
//
// function capital(capitals){
//   //...
// }

function capital(capitals) {
  let result = [];
  for (let e of capitals) {
    let state = e.state || e.country;
    let capital = e.capital;
    result.push(`The capital of ${state} is ${capital}`);
  }
  return result;
}

// Alternative
function capital(capitals) {
  let result = [];
  for (let e of capitals) result.push(`The capital of ${e.state || e.country} is ${e.capital}`);
  return result;
}

// arrow function and.map
const capital = (capitals) => capitals.map((e) => `The capital of ${e.state || e.country} is ${e.capital}`);