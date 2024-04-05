// https://www.codewars.com/kata/580a41b6d6df740d6100030c
//
// Backstory
//
// Ever the learned traveller, Alan Partridge has pretty strong views on London:
//
// "Go to London. I guarantee you'll either be mugged or not appreciated.
// Catch the train to London, stopping at Rejection, Disappointment, Backstabbing Central and Shattered Dreams Parkway."
// Task
// Your job is to check that the provided list / array of stations contains all of the stops Alan mentions. The list of stops are as follows:
//
// Rejection
// Disappointment
// Backstabbing Central
// Shattered Dreams Parkway
// If all the stops appear in the given list / array, return Smell my cheese you mother!, if not, return No, seriously, run. You will miss it..
//
// function alan(x){
//
// }

//multiple includes()
function alan(x) {
  if (
    x.includes("Rejection") &&
    x.includes("Disappointment") &&
    x.includes("Backstabbing Central") &&
    x.includes("Shattered Dreams Parkway")
  ) {
    return "Smell my cheese you mother!";
  }
  return "No, seriously, run. You will miss it.";
}

//using every() and indexOf() to chck if all stations exist
function alan(x) {
    let stations = ["Rejection", "Disappointment", "Backstabbing Central", "Shattered Dreams Parkway"]
    return stations.every((station) => x.indexOf(station) !== -1) ? "Smell my cheese you mother!" : "No, seriously, run. You will miss it.";
}

//using includes() and an arrow function for fun.
const alan = (x) => ["Rejection", "Disappointment", "Backstabbing Central", "Shattered Dreams Parkway"].every((station) => x.includes(station)) ? "Smell my cheese you mother!" : "No, seriously, run. You will miss it.";

//tests
alan([
  "Norwich",
  "Norwich",
  "Norwich",
  "Rejection",
  "Disappointment",
  "Backstabbing Central",
  "Shattered Dreams Parkway",
  "London",
]); // 'Smell my cheese you mother!'

alan([
  "Norwich",
  "Rejection",
  "Disappointment",
  "Backstabbing Central",
  "Shattered Dreams Parkway",
  "London",
]); // 'Smell my cheese you mother!'

alan([
  "Norwich",
  "Disappointment",
  "Backstabbing Central",
  "Shattered Dreams Parkway",
  "London",
]); // 'No, seriously, run. You will miss it.'
