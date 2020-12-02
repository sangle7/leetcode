/*
 * @lc app=leetcode id=441 lang=javascript
 *
 * [441] Arranging Coins
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var arrangeCoins = function (n) {
  let i = 1;
  let coins = 0;
  let cnt = 0;

  while (n - coins >= i) {
    coins += i;
    i++;
    cnt++;
  }

  return cnt;
};
// @lc code=end
