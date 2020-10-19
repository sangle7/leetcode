/*
 * @lc app=leetcode id=561 lang=javascript
 *
 * [561] Array Partition I
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayPairSum = function (nums) {
  const sorted = nums.sort((a, b) => a - b);
  let sum = 0;

  for (let i = 0; i < nums.length; i += 2) {
    sum += sorted[i];
  }
  return sum;
};
// @lc code=end
