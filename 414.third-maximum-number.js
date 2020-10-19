/*
 * @lc app=leetcode id=414 lang=javascript
 *
 * [414] Third Maximum Number
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function (nums) {
  let arr = [-Infinity, -Infinity, -Infinity];

  for (let i = 0; i < nums.length; i++) {
    let j = 0;
    while (j < 3) {
      if (arr[j] === nums[i]) {
        break;
      }
      if (arr[j] < nums[i]) {
        arr.splice(j, 0, nums[i]);
        arr.pop();
        break;
      }
      j++;
    }
  }

  if (arr[2] !== -Infinity) {
    return arr[2];
  }
  return arr[0]
};
// @lc code=end
