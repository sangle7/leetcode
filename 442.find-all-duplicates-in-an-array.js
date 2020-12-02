/*
 * @lc app=leetcode id=442 lang=javascript
 *
 * [442] Find All Duplicates in an Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function (nums) {
  let obj = {};
  let arr = [];
  for (let num of nums) {
    if (obj[num]) {
      arr.push(num);
    } else {
      obj[num] = true;
    }
  }
  return arr;
};
// @lc code=end
