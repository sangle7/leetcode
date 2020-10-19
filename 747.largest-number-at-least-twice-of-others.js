/*
 * @lc app=leetcode id=747 lang=javascript
 *
 * [747] Largest Number At Least Twice of Others
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var dominantIndex = function (nums) {
  const maxArray = [];
  let i = -1;

  if (nums.length < 2) {
    return 0;
  }

  for (let i = 0; i < nums.length; i++) {
    insertIn(nums[i], i);
  }

  function insertIn(num, index) {
    if (!maxArray.length) {
      maxArray.push(num);
      i = index;
    } else if (maxArray.length === 1) {
      if (num > maxArray[0]) {
        maxArray.unshift(num);
        i = index;
      } else {
        maxArray.push(num);
      }
    } else if (num > maxArray[0]) {
      i = index;
      maxArray.unshift(num);
      maxArray.pop();
    } else if (num > maxArray[1]) {
      maxArray[1] = num;
    }
  }

  return maxArray[0] >= 2 * maxArray[1] ? i : -1;
};
// @lc code=end
