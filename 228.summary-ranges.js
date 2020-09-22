/*
 * @lc app=leetcode id=228 lang=javascript
 *
 * [228] Summary Ranges
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function (nums) {
  const res = [];
  let i = 0;
  let temp = [];
  while (i < nums.length) {
    if (nums[i] + 1 === nums[i + 1]) {
      temp.push(nums[i]);
    } else {
      if (temp.length) {
        res.push(`${temp[0]}->${temp.pop() + 1}`);
        temp = [];
      } else {
        res.push(String(nums[i]))
      }
    }
    i++;
  }
  return res;
};
// @lc code=end
