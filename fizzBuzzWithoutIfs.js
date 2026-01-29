// https://www.codewars.com/kata/584c702256c98fc0a0000043
// 
// I know that there are quite a few fizz-buzz problems already out there but this one does have a twist (you may find this useful)
// 
// Task
// You need to implement a function that applies the standard fizz buzz test:
// 
// If a number is divisible by 3, return Fizz
// If it is divisible by 5, return Buzz
// If it is divisible by both 3 and 5, return FizzBuzz
// If it is not divisible by 3 or 5, return the number itself
// However, when making the function, you cannot use if (meaning else is also not an option).
// 
// Input
// A number will always be provided
// The number provided will always be positive and an integer
// Examples
// 6 should return Fizz
// 10 should return Buzz
// 15 should return FizzBuzz
// 17 should return 17
// 
// const fizzBuzz = n => {
//   // feel free to change this into a function :)
// };

const fizzBuzz = n => !(n % 3) && !(n % 5) ? "FizzBuzz" : !(n % 3) ? "Fizz" : !(n % 5) ? "Buzz" : n;