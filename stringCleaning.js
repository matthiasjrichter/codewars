// https://www.codewars.com/kata/57e1e61ba396b3727c000251/train/javascript
// Your boss decided to save money by purchasing some cut-rate optical character recognition software for scanning in the text of old novels to your database. At first it seems to capture words okay, but you quickly notice that it throws in a lot of numbers at random places in the text.
// 
// Examples (input -> output)
// '! !'                 -> '! !'
// '123456789'           -> ''
// 'This looks5 grea8t!' -> 'This looks great!'
// Your harried co-workers are looking to you for a solution to take this garbled text and remove all of the numbers. Your program will take in a string and clean out all numeric characters, and return a string with spacing and special characters ~#$%^&!@*():;"'.,? all intact.
///////////

//isNaN does not work here because JS interprets space as 0.
//typeof does not work because all array elements are strings
//so let's check if the element is higher or equal to 0 and lower or equal to 9 to dtermine if it's a number.

function stringClean(s){
    return s.split("").filter(element => !(element >= "0" && element <= "9")).join("")
  }

//alternative
const stringClean = (s) => s.split("").filter(element => !(element >= "0" && element <= "9")).join("")