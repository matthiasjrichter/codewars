// https://www.codewars.com/kata/5868812b15f0057e05000001
//
// You'll be given a list of two strings, and each will contain exactly one colon (":") in the middle (but not at beginning or end). The length of the strings, before and after the colon, are random.
//
// Your job is to return a list of two strings (in the same order as the original list), but with the characters after each colon swapped.
//
// Examples
// ["abc:123", "cde:456"]  -->  ["abc:456", "cde:123"]
// ["a:12345", "777:xyz"]  -->  ["a:xyz", "777:12345"]
//
// function tailSwap(arr) {
//   // your code here
//   return arr;
// }

function tailSwap(arr) {
  let [a, b] = [arr[0].split(":"), arr[1].split(":")];
  return [a[0] + ":" + b[1], b[0] + ":" + a[1]];
}

// Template literals
function tailSwap(arr) {
  let [a, b] = [arr[0].split(":"), arr[1].split(":")];
  return [`${a[0]}:${b[1]}`, `${b[0]}:${a[1]}`];
}

// Alternative
function tailSwap([str1, str2]) {
  let [head1, tail1] = str1.split(":"), [head2, tail2] = str2.split(":");
  return [`${head1}:${tail2}`, `${head2}:${tail1}`];
}
