// https://www.codewars.com/kata/52f3149496de55aded000410/train/javascript
// Write a function named sumDigits which takes a number as input and returns the sum of the absolute value of each of the number's decimal digits.
// 
// For example: (Input --> Output)
// 
// 10 --> 1
// 99 --> 18
// -32 --> 5
// Let's assume that all numbers in the input will be integer values.

function sumDigits(number) {
    return String(Math.abs(number)).split("").reduce((acc, cur) => +acc + +cur, 0)
}
sumDigits(-12)

//alternative
const sumDigits = (number) => String(Math.abs(number)).split("").reduce((acc, cur) => +acc + +cur, 0)

//more readable
function sumDigits(number) {
    return String(Math.abs(number))
        .split("")
        .reduce((acc, cur) => acc + +cur, 0)
}

//no strings. example: sumDigits(-789) should result in 24
function sumDigits(number) {
    let sum = 0 //initializes sum at 0
    let num = Math.abs(number) //makes negative number positive. -789 becomes 789

    while (num > 0) { //When we reach 0.7 -> 0 the while loop stops.
        sum += num % 10 //modulo gives us the last digit: 9. We then add that to sum.
        num = Math.trunc(num / 10) //dividing num by 10 and then removing fractional digit gives us the next digit to the left: 8. 
    }

    return sum //returns the result once the while loop ends
}

sumDigits(789) //24