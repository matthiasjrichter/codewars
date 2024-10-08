// https://www.codewars.com/kata/5a7893ef0025e9eb50000013
//
// Task
// Given an array/list [] of integers , Find The maximum difference between the successive elements in its sorted form.
//
// Notes
// Array/list size is at least 3 .
//
// Array/list's numbers Will be mixture of positives and negatives also zeros_
//
// Repetition of numbers in the array/list could occur.
//
// The Maximum Gap is computed Regardless the sign.
//
// Input >> Output Examples
// maxGap ({13,10,5,2,9}) ==> return (4)
// Explanation:
// The Maximum Gap after sorting the array is 4 , The difference between 9 - 5 = 4 .
// maxGap ({-3,-27,-4,-2}) ==> return (23)
// Explanation:
// The Maximum Gap after sorting the array is 23 , The difference between  |-4- (-27) | = 23 .
//
// Note : Regardless the sign of negativity .
//
// maxGap ({-7,-42,-809,-14,-12}) ==> return (767)
// Explanation:
// The Maximum Gap after sorting the array is 767 , The difference between  | -809- (-42) | = 767 .
//
// Note : Regardless the sign of negativity .
//
// maxGap ({-54,37,0,64,640,0,-15}) //return (576)
// Explanation:
// The Maximum Gap after sorting the array is 576 , The difference between  | 64 - 640 | = 576 .
//
// Note : Regardless the sign of negativity .
//
// function maxGap (numbers){
//     //your code here
//   }

//forEach()
function maxGap(numbers) {
  let result = 0;
  let sorted = [...numbers].sort((a, b) => a - b);
  sorted.forEach((e, i, a) => {
    let gap = Math.abs(e - a[i + 1]);
    if (gap > result) result = gap;
  });
  return result;
}

//reduce()
function maxGap(numbers) {
  let sorted = [...numbers].sort((a, b) => a - b);
  return sorted.reduce((r, c, i, a) => i < a.length - 1 ? Math.max(r, Math.abs(c - a[i + 1])) : r, 0);
}

//one line for fun
const maxGap = (numbers) => [...numbers].sort((a, b) => a - b).reduce((r, c, i, a) => i < a.length - 1 ? Math.max(r, Math.abs(c - a[i + 1])) : r, 0);

//test
maxGap([13, 3, 5]); //8
