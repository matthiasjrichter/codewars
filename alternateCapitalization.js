// https://www.codewars.com/kata/59cfc000aeb2844d16000075/javascript
//
// Given a string, capitalize the letters that occupy even indexes and odd indexes separately, and return as shown below. Index 0 will be considered even.
//
// For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF']. See test cases for more examples.
//
// The input will be a lowercase string with no spaces.
//
// Good luck!
//
// function capitalize(s){
//     return [];
//   };

function capitalize(s) {
  let a = "";
  let b = "";
  [...s].forEach((e, i) => {
    if (i % 2 === 0) {
      a += e.toUpperCase();
      b += e;
    } else {
      a += e;
      b += e.toUpperCase();
    }
  });
  return [a, b];
}

//alternative
function capitalize(s) {
  let a = ["", ""];
  [...s].forEach((e, i) => {
    if (i % 2 === 0) {
      a[0] += e.toUpperCase();
      a[1] += e;
    } else {
      a[0] += e;
      a[1] += e.toUpperCase();
    }
  });
  return a;
}

//alternative 2
function capitalize(s) {
  let a = ["", ""];
  [...s].forEach((e, i) => {
    a[i % 2] += e.toUpperCase();
    a[(i + 1) % 2] += e;
  });
  return a;
}

//test
capitalize("abcdef"); //['AbCdEf', 'aBcDeF']
