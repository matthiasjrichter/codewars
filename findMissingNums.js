// https://www.codewars.com/kata/56d02e6cc6c8b49c510005bb
//
// You will get an array of numbers.
//
// Every preceding number is smaller than the one following it.
//
// Some numbers will be missing, for instance:
//
// [-3,-2,1,5] //missing numbers are: -1,0,2,3,4
// Your task is to return an array of those missing numbers:
//
// [-1,0,2,3,4]
//
// function findMissingNumbers(arr){
//
// }

function findMissingNumbers(arr) {
  const set = new Set(arr), res = [];
  for (let i = arr.at(0); i < arr.at(-1); i++) if (!set.has(i)) res.push(i);
  return res;
}
