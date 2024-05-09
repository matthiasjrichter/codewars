// https://www.codewars.com/kata/590e03aef55cab099a0002e8
//
// Your result can only contain single digit numbers, so if adding a digit with its position gives you a multiple-digit number, only the last digit of the number should be returned.
//
// Notes:
// return an empty array if your array is empty
// arrays will only contain numbers so don't worry about checking that
//
// function incrementer(nums) {
//     // code goes here
//   }

function incrementer(nums) {
  return nums.map((e, i) => {
    let inc = e + i + 1;
    return +inc.toString().slice(-1);
  });
}

//arrow function
const incrementer = (nums) => nums.map((e, i) => +(e + i + 1).toString().slice(-1));

//modulo
const incrementer = (nums) => nums.map((a,i) => (a + i + 1) % 10);