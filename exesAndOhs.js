// https://www.codewars.com/kata/55908aad6620c066bc00002a/train/javascript
// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.
// 
// Examples input/output:
// 
// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false

function XO(str) {
    let arr = str.toLowerCase().split("") //converts string to lowercase and splits it into a new array
    let x = arr.filter(el => el === "x") //creates new array with only x
    let o = arr.filter(el => el === "o") //creates new array with only o
    return x.length === o.length //if x and o have the same number of elements returns true, else returns false
}