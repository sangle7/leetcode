/*
 * @lc app=leetcode id=121 lang=javascript
 *
 * [121] Best Time to Buy and Sell Stock
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let max = 0;
  for (let i = 0; i < prices.length; i++) {
    for (let j = i+1; j < prices.length; j++) {
      max = Math.max(prices[j] - prices[i], max)
    }
  }
  return max;
};
// @lc code=end
