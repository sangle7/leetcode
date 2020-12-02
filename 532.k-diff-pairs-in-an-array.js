/*
 * @lc app=leetcode id=532 lang=javascript
 *
 * [532] K-diff Pairs in an Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findPairs = function (nums, k) {
  let count = 0;
  const obj = {};
  for (let num of nums) {
    obj[num] = obj[num] || 0;
    obj[num]++;
  }

  if (k === 0) {
    for (let key in obj) {
      if (obj[key] >= 2) {
        count++;
      }
    }
  } else {
    for (let key in obj) {
      if (obj[parseInt(key) + k]) {
        count++;
      }
    }
  }
  return count;
};
// @lc code=end
