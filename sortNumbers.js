// https://www.codewars.com/kata/5174a4c0f2769dd8b1000003
//
// Finish the solution so that it sorts the passed in array of numbers. If the function passes in an empty array or null/nil value then it should return an empty array.
//
// For example:
//
// solution([1, 2, 10, 50, 5]); // should return [1,2,5,10,50]
// solution(null); // should return []
//
// function solution(nums){
//
// }

function solution(nums) {
  if (!nums) return [];
  return nums.sort((a, b) => a - b);
}

//alternative
const solution = (nums) => nums ? nums.sort((a, b) => a - b) : [];

//test
solution([1, 2, 10, 50, 5]); //[1,2,5,10,50]
