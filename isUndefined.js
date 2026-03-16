// https://www.codewars.com/kata/564a6486c2070faee6000011/
// 
// The function is supposed to check if the input is undefined, but it is not working correctly. Can you fix the code ?
// 
// function isUndefined(value) {
//     return value == 'undefined';
// }

function isUndefined(value) {
    return value === undefined;
}

// Arrow function
const isUndefined = value => value === undefined;