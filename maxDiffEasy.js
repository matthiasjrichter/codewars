// https://www.codewars.com/kata/588a3c3ef0fbc9c8e1000095/train/javascript
//
// You must implement a function that returns the difference between the largest and the smallest value in a given list / array (lst) received as the parameter.
//
// lst contains integers, that means it may contain some negative numbers
// if lst is empty or contains a single element, return 0
// lst is not sorted
// [1, 2, 3, 4]   //  returns 3 because 4 -   1  == 3
// [1, 2, 3, -4]  //  returns 7 because 3 - (-4) == 7
// Have fun!
//
// function maxDiff(list) {
//     return 0;
//   };

function maxDiff(list) {
    if (list.length <= 1) return 0;
    return Math.max(...list) - Math.min(...list);
}

//alternative
const maxDiff = (list) => list.length <= 1 ? 0 : Math.max(...list) - Math.min(...list);

//test
maxDiff([1, 2, 3, -4]); //  returns 7 because 3 - (-4) == 7
