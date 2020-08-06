/*
 * @lc app=leetcode id=62 lang=javascript
 *
 * [62] Unique Paths
 */

// @lc code=start
/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function (m, n) {
  const dp = {};

  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (i === 1 || j === 1) {
        dp[i + '_' + j] = 1;
      } else {
        dp[i + '_' + j] = dp[(i - 1 )+ '_' + j] + dp[i + '_' + (j - 1)];
      }
    }
  }
  return dp[m + '_' + n]
};

//d(m,n) = d(m -1,n) + d(m.n-1)

// @lc code=end
