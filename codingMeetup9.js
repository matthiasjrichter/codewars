// https://www.codewars.com/kata/5829ca646d02cd1a65000284/javascript
// 
// You will be given an array of objects (associative arrays in PHP) representing data about developers who have signed up to attend the next coding meetup that you are organising.
// 
// Your task is to return:
// 
// true if developers from all of the following age groups have signed up: teens, twenties, thirties, forties, fifties, sixties, seventies, eighties, nineties, centenarian (at least 100 years young).
// false otherwise.
// For example, given the following input array:
// 
// var list1 = [
//   { firstName: 'Harry', lastName: 'K.', country: 'Brazil', continent: 'Americas', age: 19, language: 'Python' },
//   { firstName: 'Kseniya', lastName: 'T.', country: 'Belarus', continent: 'Europe', age: 29, language: 'JavaScript' },
//   { firstName: 'Jing', lastName: 'X.', country: 'China', continent: 'Asia', age: 39, language: 'Ruby' },
//   { firstName: 'Noa', lastName: 'A.', country: 'Israel', continent: 'Asia', age: 40, language: 'Ruby' },
//   { firstName: 'Andrei', lastName: 'E.', country: 'Romania', continent: 'Europe', age: 59, language: 'C' },
//   { firstName: 'Maria', lastName: 'S.', country: 'Peru', continent: 'Americas', age: 60, language: 'C' },
//   { firstName: 'Lukas', lastName: 'X.', country: 'Croatia', continent: 'Europe', age: 75, language: 'Python' },
//   { firstName: 'Chloe', lastName: 'K.', country: 'Guernsey', continent: 'Europe', age: 88, language: 'Ruby' },
//   { firstName: 'Viktoria', lastName: 'W.', country: 'Bulgaria', continent: 'Europe', age: 98, language: 'PHP' },
//   { firstName: 'Piotr', lastName: 'B.', country: 'Poland', continent: 'Europe', age: 128, language: 'JavaScript' }
// ];
// your function should return true as there is at least one developer from each age group.
// 
// Notes:
// 
// The input array will always be valid and formatted as in the example above.
// Age is represented by a number which can be any positive integer up to 199.
// 
// function isAgeDiverse(list) {
//   // thank you for checking out the Coding Meetup kata :)
// }

function isAgeDiverse(list) {
  let ageCounts = {teens: 0, twenties: 0, thirties: 0, forties: 0, fifties: 0, sixties: 0, seventies: 0, eighties: 0, nineties: 0, centenarian: 0};
  for (let dev of list){
    if (dev.age < 20 && dev.age >= 10) ageCounts.teens++;
    else if (dev.age < 30) ageCounts.twenties++;
    else if (dev.age < 40) ageCounts.thirties++;
    else if (dev.age < 50) ageCounts.forties++;
    else if (dev.age < 60) ageCounts.fifties++;
    else if (dev.age < 70) ageCounts.sixties++;
    else if (dev.age < 80) ageCounts.seventies++;
    else if (dev.age < 90) ageCounts.eighties++;
    else if (dev.age < 100) ageCounts.nineties++;
    else if (dev.age >= 100) ageCounts.centenarian++;
  }
  return Object.values(ageCounts).every((count) => count > 0);
}

// A bit more concise
function isAgeDiverse(list) {
  let ageCounts = {teens: 0, twenties: 0, thirties: 0, forties: 0, fifties: 0, sixties: 0, seventies: 0, eighties: 0, nineties: 0, centenarian: 0};
  for (let dev of list){
    if (dev.age < 20 && dev.age >= 10) ageCounts.teens++;
    else if (dev.age < 30) ageCounts.twenties++;
    else if (dev.age < 40) ageCounts.thirties++;
    else if (dev.age < 50) ageCounts.forties++;
    else if (dev.age < 60) ageCounts.fifties++;
    else if (dev.age < 70) ageCounts.sixties++;
    else if (dev.age < 80) ageCounts.seventies++;
    else if (dev.age < 90) ageCounts.eighties++;
    else if (dev.age < 100) ageCounts.nineties++;
    else ageCounts.centenarian++;
  }
  return Object.values(ageCounts).every((count) => count);
}

// Ternary (probably wouldnt use this in production as it's a bit unusual)
function isAgeDiverse(list) {
  let ageCounts = {teens: 0, twenties: 0, thirties: 0, forties: 0, fifties: 0, sixties: 0, seventies: 0, eighties: 0, nineties: 0, centenarian: 0};
  for (let dev of list) {
    dev.age < 20 && dev.age >= 10 ? ageCounts.teens++
    : dev.age < 30 ? ageCounts.twenties++
    : dev.age < 40 ? ageCounts.thirties++
    : dev.age < 50 ? ageCounts.forties++
    : dev.age < 60 ? ageCounts.fifties++
    : dev.age < 70 ? ageCounts.sixties++
    : dev.age < 80 ? ageCounts.seventies++
    : dev.age < 90 ? ageCounts.eighties++
    : dev.age < 100 ? ageCounts.nineties++
    : ageCounts.centenarian++;
  }
  return Object.values(ageCounts).every((count) => count);
}