// https://www.codewars.com/kata/59441520102eaa25260000bf/train/javascript
// Write a function that always returns 5
// 
// Sounds easy right? Just bear in mind that you can't use any of the following characters: 0123456789*+-/
// 
// Good luck :)
//////////////////

//Math.PI is 3.14159, Math.E is 2.718
//(Math.hypot(Math.E, Math.PI)) 4,1543
function unusualFive() {
    return Math.ceil(Math.hypot(Math.E, Math.PI))
  }

//or
function unusualFive() {
    let five = "five?"
    return five.length
  }

//or
function unusualFive() {
    let five = "abcdef"
    return five.search("f")
  }




