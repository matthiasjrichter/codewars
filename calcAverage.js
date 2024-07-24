/*https://www.codewars.com/kata/57a2013acf1fa5bfc4000921
Write a function which calculates the average of the numbers in a given list.
Note: Empty arrays should return 0.*/

//So: I'll sum all elements and then divide by array length. Making sure to return 0 if empty

function findAverage(array) {
    if(array.length === 0) return 0
    else return array.reduce((acc, cur) => acc + cur, 0) / array.length
  }
// a bit shorter:
const findAverage = array => array.length === 0 ? 0 : array.reduce((acc, cur) => acc + cur) / array.length
