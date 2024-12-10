// https://www.codewars.com/kata/5b68c7029756802aa2000176
//
// Given a logarithm base X and two values A and B, return a sum of logratihms with the base X:
// logXA + logXB
//
// function logs(x , a, b){
//     //your code here
//     }

function logs(x, a, b) {
  return Math.log(a * b) / Math.log(x);
}

// arrow function
const logs = (x, a, b)  => Math.log(a * b) / Math.log(x);