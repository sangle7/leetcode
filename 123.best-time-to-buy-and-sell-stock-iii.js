/*
 * @lc app=leetcode id=123 lang=javascript
 *
 * [123] Best Time to Buy and Sell Stock III
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let stack = [];
  let left = 0;
  let i = 0;
  while (i < prices.length) {
    if (prices[i] > prices[i + 1]) {
      stack.push(prices[i] - prices[left]);
      left = i + 1;
    }
    i++;
  }
  if (left < prices.length - 1) {
    stack.push(prices[prices.length - 1] - prices[left]);
  }

  if (!stack.length) {
    return 0;
  }

  if (stack.length === 1) {
    return stack[0];
  }

  console.error(stack)

  const sorted = stack.sort((a, b) => b - a);
  return sorted[0] + sorted[1];
};
// @lc code=end
