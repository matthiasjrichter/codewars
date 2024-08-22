// https://www.codewars.com/kata/55960bbb182094bc4800007b
//
// Write a function insert_dash(num) / insertDash(num) / InsertDash(int num) that will insert dashes ('-') between each two odd digits in num. For example: if num is 454793 the output should be 4547-9-3.
//
// Note that the number will always be non-negative (>= 0).
//
// function insertDash(num) {
//     //code me
//  }
//

function insertDash(num) {
  num = String(num).split("");
  for (let i = 0; i < num.length - 1; i++) {
    if (num[i] % 2 !== 0 && num[i + 1] % 2 !== 0) num[i] += "-";
  }
  return num.join("");
}

//RegExp
const insertDash = (num) => String(num).replace(/([13579])(?=[13579])/g, "$1-");
//test
insertDash(454793); //4547-9-3
