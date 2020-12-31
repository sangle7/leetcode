/*
 * @lc app=leetcode id=453 lang=javascript
 *
 * [453] Minimum Moves to Equal Array Elements
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var minMoves = function (nums) {
  const min = Math.min.apply(null, nums);
  const sum = nums.reduce((pre, elem) => {
    pre += elem - min;
    return pre;
  }, 0);
  return sum;
};
// @lc code=end
