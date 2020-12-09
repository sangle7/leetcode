/*
 * @lc app=leetcode id=44 lang=javascript
 *
 * [44] Wildcard Matching
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function (s, p) {
  let row = p.length + 1;
  let col = s.length + 1;

  let dp = new Array(row).fill(1);
  dp = dp.map((el) => new Array(col));

  dp[0][0] = true;

  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (i === 0 && j === 0) {
      } else if (i === 0) {
        dp[i][j] = false;
      } else if (j === 0) {
        switch (p[i - 1]) {
          case '*':
            dp[i][j] = dp[i - 1][j];
            break;
          default:
            dp[i][j] = false;
        }
      } else {
        switch (p[i - 1]) {
          case '?':
            dp[i][j] = dp[i - 1][j - 1];
            break;
          case '*':
            dp[i][j] = dp[i][j - 1] || dp[i - 1][j];
            break;
          default:
            dp[i][j] = dp[i - 1][j - 1] && p[i - 1] === s[j - 1];
        }
      }
    }
  }

  // console.error(dp);

  return dp[row - 1][col - 1];
};
// @lc code=end
