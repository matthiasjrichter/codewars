// https://www.codewars.com/kata/80-s-kids-number-1-how-many-licks-does-it-take
//
// How many licks does it take to get to the tootsie roll center of a tootsie pop?
//
// A group of engineering students from Purdue University reported that its licking machine, modeled after a human tongue, took an average of 364 licks to get to the center of a Tootsie Pop. Twenty of the group's volunteers assumed the licking challenge-unassisted by machinery-and averaged 252 licks each to the center.
//
// Your task, if you choose to accept it, is to write a function that will return the number of licks it took to get to the tootsie roll center of a tootsie pop, given some environmental variables.
//
// Everyone knows it's harder to lick a tootsie pop in cold weather but it's easier if the sun is out. You will be given an object of environmental conditions for each trial paired with a value that will increase or decrease the number of licks. The environmental conditions all apply to the same trial.
//
// Assuming that it would normally take 252 licks to get to the tootsie roll center of a tootsie pop, return the new total of licks along with the condition that proved to be most challenging (causing the most added licks) in that trial.
//
// Example:
//
// totalLicks({ "freezing temps": 10, "clear skies": -2 });
// Should return:
//
// "It took 260 licks to get to the tootsie roll center of a tootsie pop. The toughest challenge was freezing temps."
// Other cases: If there are no challenges, the toughest challenge sentence should be omitted. If there are multiple challenges with the highest toughest amount, the first one presented will be the toughest. If an environment variable is present, it will be either a positive or negative integer. No need to validate.
//
// function totalLicks(env) {
//     // The Owl says, "Code Me!"
//   }

function totalLicks(env) {
  let licks = 252;
  let highestValue = 0;
  let highestKey = "";
  for (let i in env) {
    licks += env[i];
    if (env[i] > highestValue) {
      highestValue = env[i];
      highestKey = i;
    }
  }
  return (
    "It took " +
    licks +
    " licks to get to the tootsie roll center of a tootsie pop." +
    (highestValue === 0
      ? ""
      : " The toughest challenge was " + highestKey + ".")
  );
}

//Object.entries() and template literal
function totalLicks(env) {
  let licks = 252;
  let highestValue = 0;
  let highestKey = "";
  for (const [key, value] of Object.entries(env)) {
    licks += value;
    if (value > highestValue) {
      highestValue = value;
      highestKey = key;
    }
  }
  return `It took ${licks} licks to get to the tootsie roll center of a tootsie pop.${
    highestValue === 0 ? "" : ` The toughest challenge was ${highestKey}.`
  }`;
}

//test
totalLicks({ "freezing temps": 10, "clear skies": -2 }); //"It took 260 licks to get to the tootsie roll center of a tootsie pop. The toughest challenge was freezing temps."
