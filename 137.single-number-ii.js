/*
 * @lc app=leetcode id=137 lang=javascript
 *
 * [137] Single Number II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  var ones = 0,
    twos = 0,
    threes = 0;
  for (var i = 0; i < nums.length; i++) {
    twos |= ones & nums[i];
    ones ^= nums[i];
    threes = ones & twos;
    ones &= ~threes;
    twos &= ~threes;
  }
  return ones;
};
// @lc code=end
