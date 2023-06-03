// https://www.codewars.com/kata/55edaba99da3a9c84000003b/train/javascript
// Complete the function which takes two arguments and returns all numbers which are divisible by the given divisor. First argument is an array of numbers and the second is the divisor.
// 
// Example(Input1, Input2 --> Output)
// [1, 2, 3, 4, 5, 6], 2 --> [2, 4, 6]

//we get an array of "numbers" and a number "divisor"
//we return the elements that are divisible. 
//let's work with %

function divisibleBy(numbers, divisor){
    return numbers.filter(element => element % divisor === 0)
}
//alternative:
const divisibleBy = (numbers, divisor) => numbers.filter(element => element % divisor === 0)