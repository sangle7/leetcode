/*
 * @lc app=leetcode id=63 lang=javascript
 *
 * [63] Unique Paths II
 */

// @lc code=start
/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function (obstacleGrid) {
  const m = obstacleGrid.length;
  const n = obstacleGrid[0].length;

  if (obstacleGrid[0][0] === 1) {
    return 0;
  }

  const dp = {};

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (obstacleGrid[i][j] === 1) {
        dp[i + '_' + j] = 0;
      } else if (i === 0 && j === 0) {
        dp[i + '_' + j] = 1;
      } else if (i === 0) {
        dp[i + '_' + j] = dp[i + '_' + (j - 1)];
      } else if (j === 0) {
        dp[i + '_' + j] = dp[i - 1 + '_' + j];
      } else {
        dp[i + '_' + j] = dp[i - 1 + '_' + j] + dp[i + '_' + (j - 1)];
      }
    }
  }
  return dp[m - 1 + '_' + (n - 1)] || 0;
};
// @lc code=end
