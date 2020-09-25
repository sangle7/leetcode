/*
 * @lc app=leetcode id=746 lang=javascript
 *
 * [746] Min Cost Climbing Stairs
 */

// @lc code=start
/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function (cost) {
  const costArray = [];
  for (let i = 0; i < cost.length; i++) {
    if (i === 0 || i === 1) {
      costArray[i] = cost[i];
    } else {
      costArray[i] = Math.min(costArray[i - 2], costArray[i - 1]) + cost[i];
    }
  }
  return Math.min(costArray[cost.length - 1], costArray[cost.length - 2]);
};
// @lc code=end
