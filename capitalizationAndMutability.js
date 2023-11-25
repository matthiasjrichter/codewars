// https://www.codewars.com/kata/595970246c9b8fa0a8000086
//
// Your coworker was supposed to write a simple helper function to capitalize a string (that contains a single word) before they went on vacation.
//
// Unfortunately, they have now left and the code they gave you doesn't work. Fix the helper function they wrote so that it works as intended (i.e. it must make the first character in the string upper case).
//
// The string will always start with a letter and will never be empty.
//
// Examples:
//
// "hello" --> "Hello"
// "Hello" --> "Hello" (the first letter was already capitalized)
// "a"     --> "A"
//
// function capitalizeWord(word) {
//     word[0].toUpperCase();
//     return word;
//   }

function capitalizeWord(word) {
  return word[0].toUpperCase() + word.slice(1);
}

//alternative
const capitalizeWord = (word) => word[0].toUpperCase() + word.slice(1);

//with charAt()
const capitalizeWord = (word) => word.charAt(0).toUpperCase() + word.slice(1);

//replace()
const capitalizeWord = (word) => word.replace(word[0], word[0].toUpperCase());