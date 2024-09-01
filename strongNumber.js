https://www.codewars.com/kata/5a4d303f880385399b000001

// Strong number is a number with the sum of the factorial of its digits is equal to the number itself.
// 
// For example, 145 is strong, because 1! + 4! + 5! = 1 + 24 + 120 = 145.
// 
// Task
// Given a positive number, find if it is strong or not, and return either "STRONG!!!!" or "Not Strong !!".
// 
// Examples
// 1 is a strong number, because 1! = 1, so return "STRONG!!!!".
// 123 is not a strong number, because 1! + 2! + 3! = 9 is not equal to 123, so return "Not Strong !!".
// 145 is a strong number, because 1! + 4! + 5! = 1 + 24 + 120 = 145, so return "STRONG!!!!".
// 150 is not a strong number, because 1! + 5! + 0! = 122 is not equal to 150, so return "Not Strong !!".
// 
// 
// function strong(n) {
//     return "STRONG!!!!" || "Not Strong !!" ;
//   }


function factorial(num) {
    if (num === 0 || num === 1) {
        return 1;
    }
    return num * factorial(num - 1);
}

function strong(n) {
    let digits = n.toString().split('');
    let sumOfFactorials = digits.reduce((sum, digit) => sum + factorial(Number(digit)), 0);
    return sumOfFactorials === n ? "STRONG!!!!" : "Not Strong !!";
}