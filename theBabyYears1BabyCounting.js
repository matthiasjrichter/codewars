// https://www.codewars.com/kata/5bc9951026f1cdc77400011c
//
// You've had a baby.
//
// Well done. Nice isn't it? Life destroying... but in a good way.
//
// Part of your new routine is lying awake at night worrying that you've either lost the baby... or that you have more than 1!
//
// Given a string of words (x), you need to calculate how many babies are in it. To count as a baby you must have all of the letters in baby ('b', 'a', 'b', 'y'). That counts as 1. They do not need to be in order in the string. Upper and lower case letters count.
//
// Examples:
//
// "baby" = 1
// "abby" = 1
// "babybaby" = 2
// "Why the hell are there so many babies?!" = 1
// "Anyone remember life before babies?" = 1
// "Happy babies boom ba by?" = 2
// If there are no babies in the string - you lost the baby!! Return a different value, as shown below:
//
// 'none here' = "Where's the baby?!" '' = "Where's the baby?!"
//
// function babyCount(x) {
//     // good luck - you'll need it!
//   }

//count and for loop
function babyCount(x) {
  let b = 0;
  let a = 0;
  let y = 0;
  for (let char of x) {
    if (char.toLowerCase() === "b") b++;
    if (char.toLowerCase() === "a") a++;
    if (char.toLowerCase() === "y") y++;
  }
  return Math.trunc(Math.min(b / 2, a, y)) || "Where's the baby?!";
}

//improved for loop
function babyCount(x) {
  let b = 0;
  let a = 0;
  let y = 0;
  for (let char of x.toLowerCase()) {
    if (char === "b") b++;
    if (char === "a") a++;
    if (char === "y") y++;
  }
  return Math.trunc(Math.min(b / 2, a, y)) || "Where's the baby?!";
}

//charmap Object
function babyCount(x) {
  let charMap = {};
  for (let char of x.toLowerCase()) {
    charMap.hasOwnProperty(char) ? charMap[char]++ : charMap[char] = 1;
  }
  return Math.trunc(Math.min(charMap.b / 2, charMap.a, charMap.y)) || "Where's the baby?!";
}

//a bit more concise
function babyCount(x) {
  let charMap = {};
  for (let char of x.toLowerCase()) {
    charMap[char] ? charMap[char]++ : charMap[char] = 1;
  }
  return Math.trunc(Math.min(charMap.b / 2, charMap.a, charMap.y)) || "Where's the baby?!";
}

//charmap Map
function babyCount(x) {
  let charMap = new Map();
  for (let char of x.toLowerCase()) {
    let charCount = charMap.get(char) || 0;
    charMap.has(char) ? charMap.set(char, charCount + 1) : charMap.set(char, 1);
  }
  return Math.trunc(Math.min(charMap.get("b") / 2, charMap.get("a"), charMap.get("y"))) || "Where's the baby?!";
}

//tests
babyCount("Happy babies boom ba by?"); // 2
babyCount("ysBb aaAa gbyq BqnG"); // 2
