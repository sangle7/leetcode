/*
 * @lc app=leetcode id=135 lang=javascript
 *
 * [135] Candy
 */

// @lc code=start
/**
 * @param {number[]} ratings
 * @return {number}
 */
var candy = function (ratings) {
  const arr = new Array(ratings.length).fill(1);

  for (let i = 0; i < ratings.length - 1; i++) {
    if (ratings[i + 1] > ratings[i]) {
      arr[i + 1] = arr[i] + 1;
    }
  }

  for (let i = ratings.length - 1; i > 0; i--) {
    if (ratings[i - 1] > ratings[i]) {
      arr[i - 1] = Math.max(arr[i - 1], arr[i] + 1);
    }
  }

  return arr.reduce((p, e) => p + e, 0);
};
// @lc code=end
