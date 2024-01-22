// https://www.codewars.com/kata/57f759bb664021a30300007d
//
// Given a string made up of letters a, b, and/or c, switch the position of letters a and b (change a to b and vice versa). Leave any incidence of c untouched.
//
// Example:
//
// 'acb' --> 'bca'
// 'aabacbaa' --> 'bbabcabb'
//
// function switcheroo(x){
//
// }

function switcheroo(x) {
  let xArr = x.split("");
  let result = [];
  for (let i = 0; i < xArr.length; i++) {
    if (xArr[i] === "a") result.push("b");
    else if (xArr[i] === "b") result.push("a");
    else result.push(xArr[i]);
  }
  return result.join("");
}
