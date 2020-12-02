/*
 * @lc app=leetcode id=128 lang=javascript
 *
 * [128] Longest Consecutive Sequence
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
  let res = 0;
  var s = {};
  for (let num of nums) {
    s[num] = true;
  }
  for (let num of nums) {
    if (s[num]) {
      let pre = num - 1;
      let next = num + 1;
      while (s[pre]) {
        --pre;
      }
      while (s[next]) {
        ++next;
      }
      res = Math.max(res, next - pre - 1);
    }
  }
  return res;
};
// @lc code=end
