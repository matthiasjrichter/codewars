// https://www.codewars.com/kata/5a512f6a80eba857280000fc
//
// Introduction and warm-up (highly recommended): Playing With Lists/Arrays Series
//
// Task
// Given an array/list of integers, find the Nth smallest element in the array.
//
// Notes
// Array/list size is at least 3.
// Array/list's numbers could be a mixture of positives , negatives and zeros.
// Repetition in array/list's numbers could occur, so don't remove duplications.
// Input >> Output Examples
// arr=[3,1,2]            n=2    ==> return 2
// arr=[15,20,7,10,4,3]   n=3    ==> return 7
// arr=[2,169,13,-5,0,-1] n=4    ==> return 2
// arr=[2,1,3,3,1,2],     n=3    ==> return 2
// Playing with Numbers Series
// Playing With Lists/Arrays Series
// More Enjoyable Katas
//
// Enjoy Learning !!
//
// function nthSmallest(arr, pos){
//     //your code here
//   }

function nthSmallest(arr, pos) {
  return arr.sort((a, b) => a - b)[pos - 1];
}

//arrow function
const nthSmallest = (arr, pos) => arr.sort((a, b) => a - b)[pos - 1];

//test
nthSmallest([2, 169, 13, -5, 0, -1], n); // return 2
