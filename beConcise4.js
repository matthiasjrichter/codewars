// https://www.codewars.com/kata/5703c093022cd1aae90012c9
//
// Be Concise IV - Index of an element in an array
// Task
// Provided is a function Kata which accepts two parameters in the following order: array, element and returns the index of the element if found and "Not found" otherwise. Your task is to shorten the code as much as possible in order to meet the strict character count requirements of the Kata. (no more than 161) You may assume that all array elements are unique.
//
// function find(array, element) {
//     for (let i = 0; i < array.length; i++) {
//       if (array[i] === element) return i;
//     }
//     return "Not found";
//   }

function find(a, e) {
  let i = a.findIndex((x) => x === e);
  return i === -1 ? "Not found" : i;
}

// need to shorten it
function find(a, e) {
  let i = a.findIndex((x) => x === e);
  return i < 0 ? "Not found" : i;
}

// getting ugly
let find=(a,e)=>{
let i=a.findIndex(x=>x==e)
return i<0?"Not found":i}

// appears the author explicitly wants to see indexOf(). What a horrible kata!
let find=(a,e)=>{
let i=a.indexOf(e)
return i<0?"Not found":i}