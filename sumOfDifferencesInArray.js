// https://www.codewars.com/kata/5b73fe9fb3d9776fbf00009e/train/javascript
// Your task is to sum the differences between consecutive pairs in the array in descending order.
// 
// Example
// [2, 1, 10]  -->  9
// In descending order: [10, 2, 1]
// 
// Sum: (10 - 2) + (2 - 1) = 8 + 1 = 9
// 
// If the array is empty or the array has only one element the result should be 0 (Nothing in Haskell, None in Rust).


//Okay this funny: a - b + b - c + c - d = a - d
function sumOfDifferences(arr) {
    let sorted = arr.sort((a, b) => b - a)
    if (sorted.length <= 1) return 0
    else return sorted[0] - sorted[sorted.length - 1]
}

//alternative without sorting
function sumOfDifferences(arr) {
    if (arr.length <= 1) return 0
    else return Math.max(...arr) - Math.min(...arr)
}
sumOfDifferences([2, 1, 10])

//one line
const sumOfDifferences = arr => arr.length <= 1 ? 0 : Math.max(...arr) - Math.min(...arr)
