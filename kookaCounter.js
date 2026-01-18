// https://www.codewars.com/kata/58e8cad9fd89ea0c6c000258/javascript
//
// A family of kookaburras are in my backyard.
//
// I can't see them all, but I can hear them!
//
// How many kookaburras are there?
//
// Hint
// The trick to counting kookaburras is to listen carefully
//
// The males sound like HaHaHa...
//
// The females sound like hahaha...
//
// And they always alternate male/female
//
// Examples
// ha = female => 1
// Ha = male => 1
// Haha = male + female => 2
// haHa = female + male => 2
// hahahahaha = female => 1
// hahahahahaHaHaHa = female + male => 2
// HaHaHahahaHaHa = male + female + male => 3
// ^ Kata Note : No validation is necessary; only valid input will be passed :-)
//
// var kookaCounter = function(laughing) {
//   // Your code here!
//   return 0
// }

function kookaCounter(laughing) {
  if (laughing.length === 0) return 0;
  const arr = laughing.split("a");

  let count = 1;
  let current = arr[1];
  for (let i = 2; i < arr.length - 1; i++) {
    if (arr[i] !== current) {
      count++;
      current = arr[i];
    }
  }
  return count;
}

// .reduce()
function kookaCounter(laughing) {
  const arr = laughing.split("a");
  return arr.reduce((a, c, i) => a + (arr[i + 1] === c ? 0 : 1), - 1);
}

// Arrow function
const kookaCounter = (l) => l.split("a").reduce((a, c, i, arr) => a + (arr[i + 1] === c ? 0 : 1), -1);

// Better without array
function kookaCounter(laughing){
    const sounds = laughing.replaceAll("a", "");
    if (!sounds) return 0;
    let count = 1;
    for (let i = 1; i < sounds.length; i++) if (sounds[i] !== sounds[i - 1]) count++;
    return count;
}