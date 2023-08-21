// https://www.codewars.com/kata/5769b3802ae6f8e4890009d2/train/javascript
// Take an array and remove every second element from the array. Always keep the first element and start removing with the next element.
// 
// Example:
// ["Keep", "Remove", "Keep", "Remove", "Keep", ...] --> ["Keep", "Keep", "Keep", ...]
// 
// None of the arrays will be empty, so you don't have to worry about that!

function removeEveryOther(arr) {
    return arr.filter((e, i) => i % 2 === 0)
}

//alternative
const removeEveryOther = (arr) => arr.filter((e, i) => i % 2 === 0)

//'_' is often used as a variable that's unused. Since we don't use the element in the filter method we could show it like this:
const removeEveryOther = (arr) => arr.filter((_, i) => i % 2 === 0)