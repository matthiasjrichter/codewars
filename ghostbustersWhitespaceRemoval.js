// https://www.codewars.com/kata/5668e3800636a6cd6a000018
// Oh no! Ghosts have reportedly swarmed the city. It's your job to get rid of them and save the day!
//
// In this kata, strings represent buildings while whitespaces within those strings represent ghosts.
//
// So what are you waiting for? Return the building(string) without any ghosts(whitespaces)!
//
// Example:
//
// ghostBusters("Sky scra per");
// Should return:
//
// "Skyscraper"
// If the building contains no ghosts, return the string:
//
// "You just wanted my autograph didn't you?"
//
// function ghostBusters(building) {
//
// }

function ghostBusters(building) {
  if (building.includes(" ")) {
    return building.replaceAll(" ", "");
  } else {
    return "You just wanted my autograph didn't you?";
  }
}

//alternative
const ghostBusters = (building) => building.includes(" ") ? building.replaceAll(" ", "") : "You just wanted my autograph didn't you?";

//regex
const ghostBusters = (building) => building.includes(" ") ? building.replace(/\s+/g, "") : "You just wanted my autograph didn't you?";

//test cases
ghostBusters("Sky scra per");
ghostBusters("Skyscraper");
