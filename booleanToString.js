// https://www.codewars.com/kata/551b4501ac0447318f0009cd/train/javascript
// Implement a function which convert the given boolean value into its string representation.
// 
// Note: Only valid inputs will be given.

function booleanToString(b){
    if(b === true) return "true"
    else return "false"
  }

//alternative
const booleanToString = b => b === true ? 'true' : 'false'

//alternative
function booleanToString(b){
    return b.toString()
  }