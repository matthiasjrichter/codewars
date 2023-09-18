// https://www.codewars.com/kata/55c7f90ac8025ebee1000062/javascript
// Failed Sort - Bug Fixing #4
// Oh no, Timmy's Sort doesn't seem to be working? Your task is to fix the sortArray function to sort all numbers in ascending order
// 
// var sortArray = function(value) {
//     return value.split('').sort((c, p) => c / p ).join('');
//   }

var sortArray = function(value) {
    return value.split('').sort((c, p) => c - p ).join('');
}

//alternative
const sortArray = (value) => value.split("").sort().join("");