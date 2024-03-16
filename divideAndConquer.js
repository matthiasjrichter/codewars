// https://www.codewars.com/kata/57eaec5608fed543d6000021
//
// Given a mixed array of number and string representations of integers, add up the non-string integers and subtract the total of the string integers.
//
// Return as a number.
//
// function divCon(x){
//
// }

function divCon(x) {
  let strArr = [];
  let numArr = [];
  x.forEach((e) => {
    if (typeof e === "string") {
      strArr.push(e);
    } else numArr.push(e);
  });
  return numArr.reduce((a, c) => a + c, 0) - strArr.reduce((a, c) => a + +c, 0);
}

//alternative
function divCon(x) {
  return x.reduce((a, c) => typeof c === "number" ? a + c : a - +c, 0);
}

//arrow function
const divCon = (x) => x.reduce((a, c) => typeof c === "number" ? a + c : a - c, 0);

//test
divCon([9, 3, "7", "3"]); //2
