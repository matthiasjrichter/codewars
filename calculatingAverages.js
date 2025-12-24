// https://www.codewars.com/kata/529f32794a6db5d32a00071f
// 
// Let's build a calculator that can calculate the average for an arbitrary number of arguments.
// 
// The test expects you to provide a Calculator object with an average method:
// 
// Calculator.average()
// The test also expects that when you pass no arguments, it returns 0. The arguments are expected to be integers.
// 
// It expects Calculator.average(3,4,5) to return 4.
// 
// var Calculator = {
//  average: function() {
//   // Your code here... 
//  }
// };

var Calculator = {
 average: (...args) => args.reduce((a, c) => a + c, 0) / args.length || 0
};

// Actually Calculator is already declared in the tests so dot notation works:
Calculator.average = (...args) => args.reduce((a, c) => a + c, 0) / args.length || 0;

// Safer alternative:
Calculator.average = (...args) => args.length === 0 ? 0 : args.reduce((a, c) => a + c, 0) / args.length;