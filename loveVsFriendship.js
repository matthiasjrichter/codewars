// https://www.codewars.com/kata/59706036f6e5d1e22d000016/
//
// If　a = 1, b = 2, c = 3 ... z = 26
//
// Then l + o + v + e = 54
//
// and f + r + i + e + n + d + s + h + i + p = 108
//
// So friendship is twice as strong as love :-)
//
// Your task is to write a function which calculates the value of a word based off the sum of the alphabet positions of its characters.
//
// The input will always be made of only lowercase letters and will never be empty.
//
// function wordsToMarks(string) {
//   //your code here
// }

function wordsToMarks(string) {
  const alphabet = {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
    e: 5,
    f: 6,
    g: 7,
    h: 8,
    i: 9,
    j: 10,
    k: 11,
    l: 12,
    m: 13,
    n: 14,
    o: 15,
    p: 16,
    q: 17,
    r: 18,
    s: 19,
    t: 20,
    u: 21,
    v: 22,
    w: 23,
    x: 24,
    y: 25,
    z: 26,
  };
  return string
    .split("")
    .map((char) => alphabet[char])
    .reduce((a, c) => a + c, 0);
}

//for loop and charCodeAt()
function wordsToMarks(string) {
  let sum = 0;
  for (let i = 0; i < string.length; i++) {
    sum += string.charCodeAt(i) - 96;
  }
  return sum;
}

//for of loop
function wordsToMarks(string) {
  let sum = 0;
  for (let char of string) {
    sum += char.charCodeAt(0) - 96;
  }
  return sum;
}

//test
wordsToMarks("abc"); //6
