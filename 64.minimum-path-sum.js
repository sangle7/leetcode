/*
 * @lc app=leetcode id=64 lang=javascript
 *
 * [64] Minimum Path Sum
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function (grid) {
  const p = {};
  const m = grid.length;
  const n = grid[0].length;

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (i === 0 && j === 0) {
        p[i + '_' + j] = grid[i][j];
      } else if (i === 0) {
        p[i + '_' + j] = p[i + '_' + (j - 1)] + grid[i][j];
      } else if (j === 0) {
        p[i + '_' + j] = p[i - 1 + '_' + j] + grid[i][j];
      } else {
        p[i + '_' + j] =
          Math.min(p[i - 1 + '_' + j], p[i + '_' + (j - 1)]) + grid[i][j];
      }
    }
  }
  return p[m - 1 + '_' + (n - 1)];
};
// @lc code=end

// P[m][n] = Math.min(P[m-1][n], P[m][n-1]) +grid[m][n]
