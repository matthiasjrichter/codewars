// https://www.codewars.com/kata/5a03b3f6a1c9040084001765/javascript
//
// Find the total sum of internal angles (in degrees) in an n-sided simple polygon. N will be greater than 2.
//
// function angle(n) {
//
//   }

function angle(n) {
  return (n - 2) * 180;
}

//alternative
const angle = (n) => (n - 2) * 180;
