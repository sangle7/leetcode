/*
 * @lc app=leetcode id=122 lang=javascript
 *
 * [122] Best Time to Buy and Sell Stock II
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
 var maxProfit = function (prices) {
  let earn = 0;
  let left = 0;
  let i = 0;
  while (i < prices.length) {
    if (prices[i] > prices[i + 1]) {
      earn += prices[i] - prices[left];
      left = null;
      left = i + 1;
    }
    i++;
  }
  if (left < prices.length - 1) {
    earn += prices[prices.length - 1] - prices[left];
  }
  return earn;
};
// @lc code=end

