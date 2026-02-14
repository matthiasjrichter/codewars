// https://www.codewars.com/kata/588ac50727eb94c87700001f
//
// Description:
// Write
//
// function consecutiveOnes(nums) {}
// that takes in array nums and returns the maximum consecutive 1's
//
// For example
//
// consecutiveOnes([1, 1, 0, 0, 0, 1, 1, 1, 0, 1, 0]) === 3
// consecutiveOnes([1, 1, 0, 0, 1]) === 2
// consecutiveOnes([0, 0, 0, 0, 0]) === 0
// PLEASE NOTE THAT THIS KATA HAS HEAVY PERFORMANCE TESTS AND YOU NEED OPTIMIZED CODE TO PASS IT
//
// function consecutiveOnes(nums) {
//    //code me
// };

function consecutiveOnes(nums) {
  let max = 0, current = 0;
  for (const num of nums) {
    if (num) current++;
    else {
      if (current > max) max = current;
      current = 0;
    }
  }
  return Math.max(current, max);
}

// Better
function consecutiveOnes(nums) {
  let max = 0;
  for (let i = 0, current = 0; i <= nums.length; i++) {
    if (nums[i]) current++;
    else {
      if (current > max) max = current;
      current = 0;
    }
  }
  return max;
}

// More concise with ternary
function consecutiveOnes(nums) {
  let max = 0;
  for (let i = 0, current = 0; i < nums.length; i++) {
    current = nums[i] ? current + 1 : 0;
    if (current > max) max = current;
  }
  return max;
}