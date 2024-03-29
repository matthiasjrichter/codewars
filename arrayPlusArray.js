// https://www.codewars.com/kata/5a2be17aee1aaefe2a000151
// 
// I'm new to coding and now I want to get the sum of two arrays... Actually the sum of all their elements. I'll appreciate for your help.
// 
// P.S. Each array includes only integer numbers. Output is a number too.

function arrayPlusArray(arr1, arr2) {
    return arr1.concat(arr2).reduce((a, c) => a + c, 0);
}

//alternative
const arrayPlusArray = (arr1, arr2) => arr1.concat(arr2).reduce((a, c) => a + c, 0);

//without .concat()
function arrayPlusArray(arr1, arr2) {
    return arr1.reduce((a, c) => a + c, 0) + arr2.reduce((a, c) => a + c, 0);
}

//with spread syntax
const arrayPlusArray = (arr1, arr2) => [...arr1, ...arr2].reduce((a, c) => a + c, 0);