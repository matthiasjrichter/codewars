// https://www.codewars.com/kata/55c0ac142326fdf18d0000af
//
// Hey Codewarrior!
//
// In the previous kata, you have implemented a Cube class, but now we need your help again! I'm talking about constructors. We don't have one. Let's code one (or more) such that one can instantiate an object via it, handling either no arguments or a single integer.
//
// Also we got a problem with negative values. Correct the code so negative values will be switched to positive ones!
//
// The constructor taking no arguments should assign 0 to Cube's Side property.
//
// // This Cube class needs help
// // Implement the constructor so that it can take an integer for the side or no args
// class Cube {
//
//     getSide() {
//       return this.side;
//     }
//     setSide(n) {
//       this.side = Math.abs(n);
//     }
//   }

// This Cube class needs help
// Implement the constructor so that it can take an integer for the side or no args
class Cube {
  constructor(side = 0) {
    this.setSide(side);
  }

  getSide() {
    return this.side;
  }

  setSide(n) {
    this.side = Math.abs(n);
  }
}