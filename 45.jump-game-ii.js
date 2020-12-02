/*
 * @lc app=leetcode id=45 lang=javascript
 *
 * [45] Jump Game II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function (nums) {
  let min = Infinity;
  let minObj = {};
  const subFunc = (index, count) => {
    if (min <= 2) {
      return;
    }
    if (index >= nums.length) {
      return;
    }
    if (index === nums.length - 1) {
      min = Math.min(min, count);
    }
    // 走过了
    if (minObj[index] <= count) {
      return;
    } else {
      minObj[index] = count;
      for (let i = nums[index]; i >= 1; i--) {
        subFunc(index + i, count + 1);
      }
    }
  };
  subFunc(0, 0);
  return min;
};
// @lc code=end
