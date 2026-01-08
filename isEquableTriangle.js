// https://www.codewars.com/kata/57d0089e05c186ccb600035e
//
// A triangle is called an equable triangle if its area equals its perimeter. Return true, if it is an equable triangle, else return false. You will be provided with the length of sides of the triangle. Happy Coding!
//
// function equableTriangle(a,b,c) {
//   //Your code here!
// }

function equableTriangle(a, b, c) {
  const p = a + b + c;
  const s = p / 2;
  const area = Math.sqrt(s * (s - a) * (s - b) * (s - c));

  return area === p;
}
