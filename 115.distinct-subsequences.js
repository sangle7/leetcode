/*
 * @lc app=leetcode id=115 lang=javascript
 *
 * [115] Distinct Subsequences
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var numDistinct = function (s, t) {
  let row = t.length;
  let col = s.length;

  if (row > col) {
    return 0;
  }

  let dp = new Array(row).fill(1);
  dp = dp.map((el) => new Array(col));

  dp[0][0] = t[0] === s[0] ? 1 : 0;

  for (let i = 0; i < row; i++) {
    for (let j = i; j < col; j++) {
      if (i === 0 && j === 0) {
      } else if (i === 0) {
        dp[i][j] = t[i] === s[j] ? 1 + dp[i][j - 1] : dp[i][j - 1];
      } else if (j === 0) {
        dp[i][j] = 0;
      } else {
        temp = 0;
        if (t[i] === s[j]) {
          temp = dp[i - 1][j - 1];
        }
        dp[i][j] = (dp[i][j - 1] || 0) + temp;
      }
    }
  }

  // console.error(dp);

  return dp[row - 1][col - 1];
};
// @lc code=end
