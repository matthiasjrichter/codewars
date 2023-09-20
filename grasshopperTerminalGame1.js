// https://www.codewars.com/kata/55e8aba23d399a59500000ce
// Terminal Game - Create Hero Prototype
// In this first kata in the series, you need to define a Hero prototype to be used in a terminal game. The hero should have the following attributes:
//
// attribute	value
// name	user argument or 'Hero'
// position	'00'
// health	100
// damage	5
// experience	0
// function Hero (name) {
//     // add default values here
//   }

//Object Literal Syntax
function Hero(name) {
  return {
    name: name || "Hero",
    position: "00",
    health: 100,
    damage: 5,
    experience: 0,
  };
}

//Constructor Function
function Hero(name) {
  this.name = name || "Hero";
  this.position = "00";
  this.health = 100;
  this.damage = 5;
  this.experience = 0;
}

//using default paramater
function Hero(name = "Hero") {
  this.name = name;
  this.position = "00";
  this.health = 100;
  this.damage = 5;
  this.experience = 0;
}

//Class Syntax
class Hero {
  constructor(name = "Hero") {
    this.name = name;
    this.position = "00";
    this.health = 100;
    this.damage = 5;
    this.experience = 0;
  }
}