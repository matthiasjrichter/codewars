// https://www.codewars.com/kata/5667525f0f157f7a0a000004
//
// There are just some things you can't do on television. In this case, you've just come back from having a "delicious" Barth burger and you're set to give an interview. The Barth burger has made you queezy, and you've forgotten some of the import rules of the "You Can't Do That on Television" set.
//
// If you say any of the following words a large bucket of "water" will be dumped on you: "water", "wet", "wash" This is true for any form of those words, like "washing", "watered", etc.
//
// If you say any of the following phrases you will be doused in "slime": "I don't know", "slime"
//
// If you say both in one sentence, a combination of water and slime, "sludge", will be dumped on you.
//
// Write a function, bucketOf(str), that takes a string and determines what will be dumped on your head. If you haven't said anything you shouldn't have, the bucket should be filled with "air". The words should be tested regardless of case.
//
// Examples:
//
// bucketOf("What is that, WATER?!?") -> "water"
// bucketOf("I don't know if I'm doing this right.") -> "slime"
// bucketOf("You won't get me!") -> "air"
// function bucketOf(str) {
//     // Watch what you say!
//   }

function bucketOf(str) {
  str = str.toLowerCase();

  if (
    (str.includes("water") || str.includes("wet") || str.includes("wash")) &&
    (str.includes("slime") || str.includes("i don't know"))
  )
    return "sludge";

  if (str.includes("water") || str.includes("wet") || str.includes("wash"))
    return "water";

  if (str.includes("slime") || str.includes("i don't know")) return "slime";
  return "air";
}

// more readable
function bucketOf(str) {
  const lowerCaseString = str.toLowerCase();

  const containsWaterRelatedWord =
    lowerCaseString.includes("water") ||
    lowerCaseString.includes("wet") ||
    lowerCaseString.includes("wash");

  const containsSlimeRelatedWord =
    lowerCaseString.includes("slime") ||
    lowerCaseString.includes("i don't know");

  if (containsWaterRelatedWord && containsSlimeRelatedWord) {
    return "sludge";
  }

  if (containsWaterRelatedWord) {
    return "water";
  }

  if (containsSlimeRelatedWord) {
    return "slime";
  }

  return "air";
}

// arrays to store the keywords
function bucketOf(str) {
  const lowerCaseString = str.toLowerCase();
  const waterKeywords = ["water", "wet", "wash"];
  const slimeKeywords = ["slime", "i don't know"];
  
  const containsWaterRelatedWord = waterKeywords.some(keyword => lowerCaseString.includes(keyword));
  const containsSlimeRelatedWord = slimeKeywords.some(keyword => lowerCaseString.includes(keyword));

  if (containsWaterRelatedWord && containsSlimeRelatedWord) return "sludge";
  if (containsWaterRelatedWord) return "water";
  if (containsSlimeRelatedWord) return "slime";
  return "air";
}

//test
bucketOf("I don't know if this will work without watering it first."); // sludge
