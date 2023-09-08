// https://www.codewars.com/kata/580a4734d6df748060000045/javascript
// Complete the method which accepts an array of integers, and returns one of the following:
// 
// "yes, ascending" - if the numbers in the array are sorted in an ascending order
// "yes, descending" - if the numbers in the array are sorted in a descending order
// "no" - otherwise
// You can assume the array will always be valid, and there will always be one correct answer.

function isSortedAndHow(array) {
    let sortedArray = Array.from(array); //creating a copy of 'array' because '.sort()' mutates the original array. We could also use 'array.slice()' or '[...array]' here but I find Array.from(array) more readable
    if (sortedArray.sort((a, b) => a - b).join("") === array.join("")) return "yes, ascending"; //sorting from low to high. we need to convert to a string because comparing arrays directly doesn't compare their content but their space in memory
    else if (sortedArray.sort((a, b) => b - a).join("") === array.join("")) return "yes, descending"; //sorting from high to low
    else return "no";
}