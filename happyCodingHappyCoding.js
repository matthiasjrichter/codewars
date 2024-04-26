//www.codewars.com/kata/599cdc2ab7a047241a000001/javascript

// Task
// There are five kinds of programmers in the world:
//
// 1. The programmer was happy, so he coding.
// 2. When programmer coding, he is happy.
// 3. Programmer is coding, but he is not happy.
// 4. Programmer has no job of coding, he is happy.
// 5. no coding and no happy
// Given a string nickname. It's the nickname of a programmer. Please determine which kind of programmer it belongs to. The result should be a number, 1,2,3,4 or 5.
//
// You don't know the rules? Sorry, it's a puzzle ;-)
//
// Examples
// For `nickname="Happy coding", the output should be 1.
//
// For nickname="coding happy", the output should be 2.
//
// For nickname="coding everyday", the output should be 3.
//
// For nickname="happy programmer", the output should be 4.
//
// For nickname="unhappy codewarrior", the output should be 5.
// Happy Coding ^_^
//
// function happyCoding(nickname){
//   //Happy Coding ^_^
//
// }

//////////////
// let's see:
// case insensitive
// includes happy and coding and happy comes before coding: 1
// includes happy and coding and happy comes after coding: 2
// includes coding but not happy: 3
// includes happy but not coding: 4
// doesn't include either: 5

//if statements with early returns
function happyCoding(nickname) {
  let arr = nickname.toLowerCase().split(" ");
  if (arr.includes("happy") && arr.includes("coding")) {
    if (arr.indexOf("happy") < arr.indexOf("coding")) return 1;
    return 2;
  }
  if (arr.includes("coding")) return 3;
  if (arr.includes("happy")) return 4;
  return 5;
}

//test
happyCoding("Happy coding"); // 1
happyCoding("coding happy"); // 2
