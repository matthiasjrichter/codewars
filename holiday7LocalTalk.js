// https://www.codewars.com/kata/57e92812750fcc051800004d/javascript
// 
// In Bali, as far as I can gather, when ex-pats speak to locals, they basically insert the word 'Pak' as often as possible. I am assured it means something like 'mate' or 'sir' but that could be completely wrong.
// 
// Anyway, as some basic language education(??) this kata requires you to turn any sentence provided (s) into ex-pat balinese waffle by inserting the word 'pak' between every other word. Simple 8kyu :D
// 
// Pak should not be the first or last word. Strings of just spaces should return an empty string.
// 
// FUNDAMENTALSSTRINGSARRAYS
// 
// function pak(s) {
// 
//     
// }

//map and slice
function pak(s) {
  if (s.trim() === "") return "";
  let arr = s.split(" ");
  let pak = arr.map((e) => e + " pak").join(" ");
  return pak.slice(0, -4);
}

//one line for fun
const pak = (s) => s.trim() ? s.split(" ").map((e) => e + " pak").join(" ").slice(0, -4) : "";

//for loop
function pak(s) {
  if (!s.trim()) return "";
  let arr = s.split(" ");
  for (let i = 0; i < arr.length - 1; i++) {
    arr[i] = arr[i] + " pak";
  }
  return arr.join(" ");
}

//more concise
const pak = (s) => s.trim().split(" ").join(" pak ");

//tests
pak("Take me to Semynak!"); // "Take pak me pak to pak Semynak!"
pak("   ") // ""