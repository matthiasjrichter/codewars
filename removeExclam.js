// https://www.codewars.com/kata/57fae964d80daa229d000126/train/javascript
// Description:
// Remove an exclamation mark from the end of a string. For a beginner kata, you can assume that the input data is always a string, no need to verify it.
// 
// Examples
// remove("Hi!") == "Hi"
// remove("Hi!!!") == "Hi!!"
// remove("!Hi") == "!Hi"
// remove("!Hi!") == "!Hi"
// remove("Hi! Hi!") == "Hi! Hi"
// remove("Hi") == "Hi"

function remove (string) {
    let stringArr = string.split("") //turns the string into an array
    if(stringArr[stringArr.length -1] === "!"){ //checks if the last character is "!"
        return stringArr.slice(0, -1).join("") //removes last element, turns array into a string and returns it
    }
    else return string //returns the original unmodified string
  }


//ternary
function remove (string){
    let stringArr = string.split("")
    return stringArr[stringArr.length -1] === "!" ? stringArr.slice(0, -1).join("") : string
}

//one line
const remove = string => string.split('')[string.length -1] === "!" ? string.split('').slice(0, -1).join('') : string

//without array
function remove (string){
    return string.charAt(string.length -1) === "!" ? string.substring(0, string.length -1) : string
}

//one line without array
const remove = string => string.charAt(string.length -1) === '!' ? string.substring(0, string.length -1) : string


