/*
 * @lc app=leetcode id=72 lang=javascript
 *
 * [72] Edit Distance
 */

// @lc code=start
/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function (word1, word2) {
  const row = word1.length + 1;
  const column = word2.length + 1;

  let dp = new Array(row).fill(1);
  dp = dp.map((elem) => new Array(column));
  dp[0][0] = 0;

  for (let i = 0; i < row; i++) {
    for (let j = 0; j < column; j++) {
      if (i > 0 && j > 0) {
        let temp = word1[i - 1] === word2[j - 1] ? 0 : 1;
        dp[i][j] = Math.min(
          dp[i - 1][j - 1] + temp,
          1 + dp[i - 1][j],
          1 + dp[i][j - 1]
        );
      } else if (i > 0) {
        dp[i][j] = 1 + dp[i - 1][j];
      } else if (j > 0) {
        dp[i][j] = 1 + dp[i][j - 1];
      }
    }
  }

  return dp[row - 1][column - 1];
};
// @lc code=end
