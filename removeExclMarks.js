// https://www.codewars.com/kata/57a0885cbb9944e24c00008e/train/javascript
// Write function RemoveExclamationMarks which removes all exclamation marks from a given string.

function removeExclamationMarks(s) {
    return s.replaceAll("!" , "")
  }

//shorter
const removeExclamationMarks = s => s.replaceAll("!","")