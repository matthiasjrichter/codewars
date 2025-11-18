// https://www.codewars.com/kata/5a6d3bd238f80014a2000187
//
// Kata Task
// I have a cat and a dog which I got as kitten / puppy.
//
// I forget when that was, but I do know their current ages as catYears and dogYears.
//
// Find how long I have owned each of my pets and return as a list [ownedCat, ownedDog]
//
// NOTES:
//
// Results are truncated whole numbers of "human" years
// Cat Years
// 15 cat years for first year
// +9 cat years for second year
// +4 cat years for each year after that
// Dog Years
// 15 dog years for first year
// +9 dog years for second year
// +5 dog years for each year after that
// References
//
// http://www.catster.com/cats-101/calculate-cat-age-in-cat-years
// http://www.slate.com/articles/news_and_politics/explainer/2009/05/a_dogs_life.html
//
// var ownedCatAndDog = function(catYears, dogYears) {
//   // Your code here!
//   return [0,0];
// }

function ownedCatAndDog(catYears, dogYears) {
  let ownedCat = 0;
  if (catYears >= 15) ownedCat++;
  if (catYears >= 24) ownedCat++;
  if (catYears >= 25) ownedCat += (catYears - 24) / 4;

  let ownedDog = 0;
  if (dogYears >= 15) ownedDog++;
  if (dogYears >= 24) ownedDog++;
  if (dogYears >= 25) ownedDog += (dogYears - 24) / 5;

  return [Math.trunc(ownedCat), Math.trunc(ownedDog)];
}

// Reusable helper function
const ownedCatAndDog = (catYears, dogYears) => [calcYears(catYears, 4), calcYears(dogYears, 5),];

function calcYears(years, rate) {
  if (years < 15) return 0;
  if (years < 24) return 1;
  return 2 + Math.trunc((years - 24) / rate);
}

// Two one liners
const ownedCatAndDog = (catYears, dogYears) => [calcYears(catYears, 4), calcYears(dogYears, 5)];
const calcYears = (years, rate) => years < 15 ? 0 : years < 24 ? 1 :  2 + Math.trunc((years - 24) / rate);
