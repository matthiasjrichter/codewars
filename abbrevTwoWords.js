// https://www.codewars.com/kata/57eadb7ecd143f4c9c0000a3/train/javascript
// Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.
// 
// The output should be two capital letters with a dot separating them.
// 
// It should look like this:
// 
// Sam Harris => S.H
// 
// patrick feeney => P.F

// input is a string with two words, separated by a space
// take first char of first word, then  ".", then first char of second word
// convert toUpperCase

// option 1
function abbrevName(name){
    return (name.split(' ')[0].charAt(0) + '.' + name.split(' ')[1].charAt(0)).toUpperCase()
}

// option 2
const abbrevName = name => (name.split(' ')[0].charAt(0) + '.' + name.split(' ')[1].charAt(0)).toUpperCase()

// option 3
function abbrevName(name){
    return (name.split(' ')[0][0] + '.' + name.split(' ')[1][0]).toUpperCase()
}

// option 4
const abbrevName = name => (name.split(' ')[0][0] + '.' + name.split(' ')[1][0]).toUpperCase()

// Test cases
abbrevName('John Doe') // J.D
abbrevName('J Bach') // J.B
abbrevName('kkke sadwf') // K.S