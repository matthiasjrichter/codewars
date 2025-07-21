// https://www.codewars.com/kata/595519279be6c575b5000016
//
// Description:
// Groups of characters decided to make a battle. Help them to figure out which group is more powerful. Create a function that will accept 2 strings and return the one who's stronger.
//
// Rules:
// Each character have its own power: A = 1, B = 2, ... Y = 25, Z = 26
// Strings will consist of uppercase letters only
// Only two groups to a fight.
// Group whose total power (A + B + C + ...) is bigger wins.
// If the powers are equal, it's a tie.
// Examples:
//       * "ONE", "TWO"  -> "TWO"`
//       * "ONE", "NEO"  -> "Tie!"
//
// function battle(x, y) {
//   // Lets the battle begin!
// }

function battle(x, y) {
  let scoreX = x.split("").reduce((a, c) => a + c.charCodeAt(0) - 64, 0);
  let scoreY = y.split("").reduce((a, c) => a + c.charCodeAt(0) - 64, 0);
  return scoreX > scoreY ? x : scoreY > scoreX ? y : "Tie!";
}

// Alternative
function battle(x, y) {
  const score = (z) => z.split("").reduce((a, c) => a + c.charCodeAt(0) - 64, 0);
  let scoreX = score(x)
  let scoreY = score(y)
  return scoreX > scoreY ? x : scoreY > scoreX ? y : "Tie!";
}

// Alternative 2
function battle(x, y) {
  const score = (z) => z.split("").reduce((a, c) => a + c.charCodeAt(0) - 64, 0);
  return score(x) > score(y) ? x : score(y) > score(x) ? y : "Tie!";
}

// Alternative 3
function battle(x, y) {
  const score = (s) => [...s].reduce((a, c) => a + c.charCodeAt(0) - 64, 0);
  const [a, b] = [score(x), score(y)];
  return a > b ? x : b > a ? y : "Tie!";
}
