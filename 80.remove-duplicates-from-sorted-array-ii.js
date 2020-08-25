/*
 * @lc app=leetcode id=80 lang=javascript
 *
 * [80] Remove Duplicates from Sorted Array II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  let i = 0;
  j = i + 1;

  let firstTime = true;

  while (i < nums.length && j < nums.length) {
    if (nums[i] === nums[j]) {
      if (firstTime) {
        firstTime = false;
        j++;
      } else {
        nums.splice(i, 1);
      }
    } else {
      i = j;
      j = i + 1;
      firstTime = true;
    }
  }
};
// @lc code=end
