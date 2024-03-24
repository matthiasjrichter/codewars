// https://www.codewars.com/kata/582e0e592029ea10530009ce
//
// The objective of Duck, duck, goose is to walk in a circle, tapping on each player's head until one is chosen.
//
// Task: Given an array of Player objects (an array of associative arrays in PHP) and an index (1-based), return the name of the chosen Player(name is a property of Player objects, e.g Player.name)
//
// Example:
//
// duck_duck_goose([a, b, c, d], 1) should return a.name
// duck_duck_goose([a, b, c, d], 5) should return a.name
// duck_duck_goose([a, b, c, d], 4) should return d.name
//
// function duckDuckGoose(players, goose) {
//     // ...
//   }

function duckDuckGoose(players, goose) {
  let chosenPlayer = players[(goose - 1) % players.length];
  return chosenPlayer.name;
}

//arrow function
const duckDuckGoose = (players, goose) => players[(goose - 1) % players.length].name;
