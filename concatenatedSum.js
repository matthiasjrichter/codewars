// https://www.codewars.com/kata/59a1ec603203e862bb00004f/javascript
//
// The number 198 has the property that 198 = 11 + 99 + 88, i.e., if each of its digits is concatenated twice and then summed, the result will be the original number. It turns out that 198 is the only number with this property. However, the property can be generalized so that each digit is concatenated n times and then summed.
//
// Examples
// original number =2997 , n=3
// 2997 = 222+999+999+777 and here each digit is concatenated three times.
//
// original number=-2997 , n=3
//
// -2997 = -222-999-999-777 and here each digit is concatenated three times.
// Task
// Write a function named checkConcatenatedSum that tests if a number has this generalized property.
//
// /*
// function :-checkConcatenatedSum
// inputs:- integers representing orginal number and number of times each digit should be repeated
// output:- true of concatenated sum gives orginal number else false
//
//
// */

function checkConcatenatedSum(number, n) {
  const isNegative = number < 0 ? true : false;
  let str = number + "", sum = 0;
  for (let i = isNegative ? 1 : 0; i < str.length; i++) {
    const current = +str[i].repeat(n);
    sum += isNegative ? -current : current;
  }
  return sum === number;
}

// More concise
function checkConcatenatedSum(number, n) {
  const str = Math.abs(number) + "";
  let sum = 0;
  for (const char of str) sum += +char.repeat(n);
  return (number < 0 ? -sum : sum) === number;
}
