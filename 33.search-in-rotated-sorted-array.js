/*
 * @lc app=leetcode id=33 lang=javascript
 *
 * [33] Search in Rotated Sorted Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  const newarr = [...nums, ...nums];
  let max = newarr.length - 1;
  let min = 0;

  while (max > min) {
    const mid = Math.floor(min + (max - min) / 2);
    console.error(mid, min, max);
    if (newarr[mid] === target) {
      return mid > nums.length ? mid - nums.length : mid;
    } else if (newarr[mid] < target) {
      min = mid;
    } else {
      max = mid;
    }
  }
  return -1;
};
// @lc code=end
