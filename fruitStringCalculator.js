// https://www.codewars.com/kata/57b9fc5b8f5813384a000aa3
//
// You are given a string of words and numbers. Extract the expression including:
//
// the operator: either addition ("gains") or subtraction ("loses")
// the two numbers that we are operating on
// Return the result of the calculation.
//
// Notes:
//
// "loses" and "gains" are the only two words describing operators
// No fruit debts nor bitten apples = The numbers are integers and no negatives
// Examples
// "Panda has 48 apples and loses 4"  -->  44
// "Jerry has 34 apples and gains 6"  -->  40
// Should be a nice little kata for you :)
//
// function calculate(string) {
//     // Add your code here
//   }

//filtr() and ternary
function calculate(string) {
  let arr = string.split(" ");
  let nums = arr.filter((e) => !isNaN(e));
  return arr.includes("loses") ? +nums[0] - +nums[1] : +nums[0] + +nums[1];
}

//forEach() and if-statement
function calculate(string) {
  let arr = string.split(" ");
  let nums = [];
  arr.forEach((e) => {
    if (!isNaN(e)) nums.push(+e);
  });
  if (arr.includes("loses")) return nums[0] - nums[1];
  return nums[0] + nums[1];
}

//tests
calculate("Panda has 48 apples and loses 4"); // 44
calculate("Jerry has 34 apples and gains 6"); // 40
