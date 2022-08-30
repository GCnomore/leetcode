/*
   You are given an integer array nums. 
   You are initially positioned at the array's first index, 
   and each element in the array represents your maximum jump length at that position.
   Return true if you can reach the last index, or false otherwise.
*/

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
  if (nums[0] === 0 && nums.length !== 1) return false;
  if (nums.length === 1) return true;
  if (nums[0] >= nums.length - 1) return true;

  // With number of jumps in last index can always reach last index even if it's zero.
  let validIndex = nums.length - 1;

  for (let i = nums.length - 1; i >= 0; i--) {
    /*
      Loop start from the end of the array.
      It will move backward to see if the current index can reach the validIndex.
      If the current index + current value is greater or equal to the validIndex,
      update valid index.
      If index 0 (the starting point) can reach validIndex, updating validIndex to
      zero will return true.
    */
    if (i + nums[i] >= validIndex) {
      validIndex = i;
    }
  }
  return validIndex === 0;
};

console.log(canJump([3, 2, 1, 0, 4]));
