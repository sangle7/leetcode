/*
 * @lc app=leetcode id=213 lang=javascript
 *
 * [213] House Robber II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  const len = nums.length;
  if (!len) {
    return 0;
  }
  if (len === 1) {
    return nums[0];
  }
  if (nums.reduce((pre, elem) => pre + elem, 0) === 0) {
    return 0;
  }
  const solutions = [];
  const sumMap = {};

  const F = (x, bool = false) => {
    if (x === 2) {
      if (bool) {
        return nums[2];
      }
      return F(0) + nums[2];
    }
    if (x <= 1) {
      return nums[x];
    }
    if (x === 3 && bool) {
      return F(1) + nums[3];
    }
    if (sumMap[x + String(bool)]) {
      return sumMap[x + String(bool)];
    }
    const res = Math.max(F(x - 3, bool) + nums[x], F(x - 2, bool) + nums[x]);
    sumMap[x + String(bool)] = res;
    return res;
  };

  solutions.push(F(len - 1, true));
  if (len > 1) {
    solutions.push(F(len - 2));
  }
  if (len > 2) {
    solutions.push(F(len - 3));
  }

  return Math.max(...solutions);
};
// @lc code=end
