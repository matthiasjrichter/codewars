// https://www.codewars.com/kata/5966ffb962d030e11a00005a/
//
// Create a function that takes 2 arrays of 5 string numbers each, and outputs the sum of the corresponding elements as strings as well.
//
//   sumArr(['4','5','6','7','8'],['1','2','3','4','5']) // => ['5','7','9','11','13']
//   sumArr(['34','5','200','17','6'],['27','24','14','90','16']) // => ['61','29','214','107','22']
// If any input is an empty string, it should return the number that isn't just an empty string. If both corresponding elements are empty, output "0".
//
// function sumArr(a,b) {
//
// }

// Classic for loop
function sumArr(a, b) {
  let result = [];
  for (let i = 0; i < a.length; i++) {
    result.push(String(Number(a[i]) + Number(b[i])));
  }
  return result;
}

// .forEach() and unary plus
function sumArr(a, b) {
  let result = [];
  a.forEach((n, i) => result.push(String(+n + +b[i])));
  return result;
}

// Arrow function and .map()
const sumArr = (a, b) => a.map((n, i) => +n + +b[i] + "");
