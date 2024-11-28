// https://www.codewars.com/kata/514aa0dc21607ae236000017
//
// Functional closures can get overly attached. Set them straight!
//
// Why doesn't greetAbe() actually greet Abe?
//
// let name = 'Abe'
//
// const greetAbe = () => 'Hello, ' + name + '!'
//
// name = 'Ben'
//
// const greetBen = () => 'Hello, ' + name + '!'

const greetAbe = (name = "Abe") => "Hello, " + name + "!";
const greetBen = (name = "Ben") => "Hello, " + name + "!";
