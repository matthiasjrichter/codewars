// https://www.codewars.com/kata/55b95c76e08bd5eef100001e
//
// The Arara is an isolated tribe found in the Amazon who count in pairs. For example one to eight is as follows:
//
// 1 = anane
// 2 = adak
// 3 = adak anane
// 4 = adak adak
// 5 = adak adak anane
// 6 = adak adak adak
// 7 = adak adak adak anane
// 8 = adak adak adak adak
// Take a given number and return the Arara's equivalent.
//
// e.g.
//
// 3 --> "adak anane"
//
// 8 --> "adak adak adak adak"
// https://en.wikipedia.org/wiki/Arara_people
//
// function countArara(n) {
//     //your code here
// }

const countArara = (n) => ("adak ".repeat(Math.floor(n / 2)) + (n % 2 ? "anane" : "")).trim();
