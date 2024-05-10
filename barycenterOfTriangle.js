// https://www.codewars.com/kata/5601c5f6ba804403c7000004
//
// The medians of a triangle are the segments that unit the vertices with the midpoint of their opposite sides. The three medians of a triangle intersect at the same point, called the barycenter or the centroid. Given a triangle, defined by the cartesian coordinates of its vertices we need to localize its barycenter or centroid.
//
// The function bar_triang() or barTriang or bar-triang, receives the coordinates of the three vertices A, B and C  as three different arguments and outputs the coordinates of the barycenter O in an array [xO, yO]
//
// This is how our asked function should work: the result of the coordinates should be expressed up to four decimals, (rounded result).
//
// You know that the coordinates of the barycenter are given by the following formulas.
//
// source: imgur.com
//
// For additional information about this important point of a triangle see at: (https://en.wikipedia.org/wiki/Centroid)
//
// Let's see some cases:
//
// barTriang([4, 6], [12, 4], [10, 10]) ------> [8.6667, 6.6667]
//
// barTriang([4, 2], [12, 2], [6, 10]) ------> [7.3333, 4.6667]
// The given points form a real or a degenerate triangle but in each case the above formulas can be used.
//
// Enjoy it and happy coding!!
//
// function barTriang(p1, p2, p3){
//     //your code here
//   }

function barTriang(p1, p2, p3) {
  const xO = (p1[0] + p2[0] + p3[0]) / 3;
  const yO = (p1[1] + p2[1] + p3[1]) / 3;
  return [+xO.toFixed(4), +yO.toFixed(4)];
}

//destructuring and parseFloat()
function barTriang(p1, p2, p3) {
  const [x1, y1] = p1;
  const [x2, y2] = p2;
  const [x3, y3] = p3;

  const xO = (x1 + x2 + x3) / 3;
  const yO = (y1 + y2 + y3) / 3;

  return [parseFloat(xO.toFixed(4)), parseFloat(yO.toFixed(4))];
}

//test
barTriang([4, 6], [12, 4], [10, 10]); // [8.6667, 6.6667]
