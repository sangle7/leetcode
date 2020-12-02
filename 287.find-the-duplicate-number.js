/*
 * @lc app=leetcode id=287 lang=javascript
 *
 * [287] Find the Duplicate Number
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function (nums) {
  const obj = {};
  for (let num of nums) {
    if (obj[num]) {
      return num;
    } else {
      obj[num] = true;
    }
  }
};
// @lc code=end
