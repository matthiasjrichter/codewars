// https://www.codewars.com/kata/57faa6ff9610ce181b000028
//
// You have stumbled across the divine pleasure that is owning a dog and a garden. Now time to pick up all the cr@p! :D
//
// Given a 2D array to represent your garden, you must find and collect all of the dog cr@p - represented by '@'.
//
// You will also be given the number of bags you have access to (bags), and the capactity of a bag (cap). If there are no bags then you can't pick anything up, so you can ignore cap.
//
// You need to find out if you have enough capacity to collect all the cr@p and make your garden clean again.
//
// If you do, return 'Clean', else return 'Cr@p'.
//
// Watch out though - if your dog is out there ('D'), he gets very touchy about being watched. If he is there you need to return 'Dog!!'.
//
// For example:
//
// x=
// [[_,_,_,_,_,_]
// [_,_,_,_,@,_]
// [@,_,_,_,_,_]]
//
// bags = 2, cap = 2
//
// return --> 'Clean'
//
// function crap(x, bags, cap){
//
// }

//forEach() loop
function crap(x, bags, cap) {
  let max = bags * cap;
  let crap = 0;
  let flatX = x.flat();
  if (flatX.includes("D")) return "Dog!!";
  flatX.forEach((e) => {
    if (e === "@") crap++;
  });
  if (crap > max) return "Cr@p";
  return "Clean";
}

//filter()
function crap(x, bags, cap) {
  let max = bags * cap;
  let flatX = x.flat();
  let crap = flatX.filter((e) => e === "@").length;
  if (flatX.includes("D")) return "Dog!!";
  if (crap > max) return "Cr@p";
  return "Clean";
}

//ternary
function crap(x, bags, cap) {
  let flatX = x.flat();
  return flatX.includes("D") ? "Dog!!" : flatX.filter((e) => e === "@").length > bags * cap ? "Cr@p" : "Clean";
}

//template literal and split()
const crap = (x, bags, cap) => `${x}`.includes("D") ? "Dog!!" : `${x}`.split("@").length > bags * cap ? "Cr@p" : "Clean";

//test
crap(
  [
    ["_", "_", "_", "_"],
    ["_", "_", "_", "@"],
    ["_", "_", "@", "_"],
  ],
  2,
  2
); // "Clean"

crap(
  [
    ["_", "_", "_", "_"],
    ["_", "_", "_", "@"],
    ["_", "_", "@", "_"],
  ],
  1,
  1
); // "Cr@p"
