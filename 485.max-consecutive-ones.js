/*
 * @lc app=leetcode id=485 lang=javascript
 *
 * [485] Max Consecutive Ones
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function (nums) {
  let max = 0;
  let i = 0;
  while (i < nums.length) {
    let j = i + 1;
    let count = 0;
    if (nums[i] === 1) {
      count++;
    } else {
      i++;
      continue;
    }
    while (nums[i] === 1 && nums[j] === 1) {
      count++;
      j++;
    }
    max = Math.max(max, count);
    i = j + 1;
  }
  return max;
};
// @lc code=end
