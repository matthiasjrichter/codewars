// https://www.codewars.com/kata/57faece99610ced690000165/train/javascript
//
// Description:
// Remove all exclamation marks from the end of sentence.
//
// Examples
// "Hi!"     ---> "Hi"
// "Hi!!!"   ---> "Hi"
// "!Hi"     ---> "!Hi"
// "!Hi!"    ---> "!Hi"
// "Hi! Hi!" ---> "Hi! Hi"
// "Hi"      ---> "Hi"
//
// function remove (string) {
//   return '';
// }

function remove(string) {
  while (string.endsWith("!")) {
    string = string.slice(0, -1);
  }
  return string;
}

//recursion
function remove(string) {
  if (string.endsWith("!")) {
    return remove(string.slice(0, -1));
  }
  return string;
}

//arrow function and ternary
const remove = (string) => string.endsWith("!") ? remove(string.slice(0, -1)) : string;

//test
remove("!Hi! Hi Hi!!!"); //"!Hi! Hi Hi"
