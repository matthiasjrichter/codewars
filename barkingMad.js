// https://www.codewars.com/kata/54dba07f03e88a4cec000caf/train/javascript
//
// Teach snoopy and scooby doo how to bark using object methods. Currently only snoopy can bark and not scooby doo.
//
// snoopy.bark(); // return "Woof"
// scoobydoo.bark(); // undefined
// Use method prototypes to enable all Dogs to bark.
//
// function Dog (breed) {
//     this.breed = breed;
//   }
//
//   var snoopy = new Dog("Beagle");
//
//   snoopy.bark = function() {
//     return "Woof";
//   };
//
//   var scoobydoo = new Dog("Great Dane");

function Dog(breed) {
  this.breed = breed;
}

var snoopy = new Dog("Beagle");
snoopy.bark = function () {
  return "Woof";
};

var scoobydoo = new Dog("Great Dane");
scoobydoo.bark = function () {
  return "Woof";
};

//alternative
function Dog(breed) {
  this.breed = breed;
  this.bark = function () {
    return "Woof";
  };
}
let snoopy = new Dog("Beagle");
let scoobydoo = new Dog("Great Dane");

//alternatve 2
class Dog {
  constructor(breed) {
    this.breed = breed;
  }
  bark() {
    return "Woof";
  }
}
let snoopy = new Dog("Beagle");
let scoobydoo = new Dog("Great Dane");

//arrow function
class Dog {
  constructor(breed) {
    this.breed = breed;
  }
  bark = () => "Woof";
}
let snoopy = new Dog("Beagle");
let scoobydoo = new Dog("Great Dane");
