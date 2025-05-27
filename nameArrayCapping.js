// https://www.codewars.com/kata/5356ad2cbb858025d800111d
// 
// Create a function that accepts an array of names, and returns an array of each name with its first letter capitalized and the remainder in lowercase.
// 
// Examples
// ["jo", "nelson", "jurie"] -->  ["Jo", "Nelson", "Jurie"]
// ["KARLY", "DANIEL", "KELSEY"] --> ["Karly", "Daniel", "Kelsey"]
// 
// function capMe(names) {
// 
// }

const capMe = (names) => names.map((e) => e[0].toUpperCase() + e.toLowerCase().slice(1));