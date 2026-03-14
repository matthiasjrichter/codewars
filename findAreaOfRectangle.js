// https://www.codewars.com/kata/580a0347430590220e000091
// 
// Find the area of a rectangle when provided with one diagonal and one side of the rectangle. If the input diagonal is less than or equal to the length of the side, return "Not a rectangle". If the resultant area has decimals round it to two places.
// 
// function area(d,l){
//   //Write your own Code!
// }

function area(d,l){
  if (d <= l) return "Not a rectangle";

  const otherSide = Math.sqrt(Math.pow(d, 2) - Math.pow(l, 2));
  const area = l * otherSide;

  return +area.toFixed(2);
}

// One line for fun
const area = (d, l) => d <= l ? "Not a rectangle" : +(l * Math.sqrt(Math.pow(d, 2) - Math.pow(l, 2))).toFixed(2);