// https://www.codewars.com/kata/52ad1db4b2651f744d000394
//
// Santa puts all the presents into the huge sack. In order to let his reindeers rest a bit, he only takes as many reindeers with him as he is required to do. The others may take a nap.
//
// Two reindeers are always required for the sleigh and Santa himself. Additionally he needs 1 reindeer per 30 presents. As you know, Santa has 8 reindeers in total, so he can deliver up to 180 presents at once (2 reindeers for Santa and the sleigh + 6 reindeers with 30 presents each).
//
// Complete the function reindeers(), which takes a number of presents and returns the minimum numbers of required reindeers. If the number of presents is too high, throw an error.
//
// Examples (input -> output / error)
// 0 -> 2
// 1 -> 3
// 30 -> 3
// 200 -> throws an error
//
// function reindeers(presents) {
//     // TODO
//   }

function reindeers(presents) {
  let reindeersRequired = 2; // two for Santa
  reindeersRequired += Math.ceil(presents / 30); // one for every 30 presents

  if (reindeersRequired > 8) throw new Error("");
  else return reindeersRequired;
}

// let's optimize this a bit by throwing an error early
function reindeers(presents) {
  if (presents > 180) throw new Error(""); //stops execution if too many presents are present

  let reindeersRequired = 2; // two for Santa
  reindeersRequired += Math.ceil(presents / 30); //plus reindeer one for every 30 presents

  return reindeersRequired;
}

// one line for fun
const reindeers = (presents) => presents > 180 ? (() => { throw new Error("Too many presents!"); })() : 2 + Math.ceil(presents / 30);
  
// I like this solution
function reindeers(presents) {
  if (presents > 180) throw new Error(""); // stops execution if too many presents are present. 6 reindeers * 30 presents = 180
  return 2 + Math.ceil(presents / 30); // 2 reindeers for Santa plus 1 reindeer for every 30 presents
}