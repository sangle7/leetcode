/*
 * @lc app=leetcode id=221 lang=javascript
 *
 * [221] Maximal Square
 */

// @lc code=start
/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalSquare = function (matrix) {
  const rows = matrix.length;
  if (!rows) {
    return 0;
  }
  const columns = matrix[0].length;
  let max = 0;

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < columns; j++) {
      if (matrix[i][j] === '1') {
        const len = checkBesides(i, j, 1);
        max = Math.max(len, max);
      }
    }
  }
  return max * max;

  function checkBesides(x, y, len) {
    if (x + len >= rows || y + len >= columns) {
      return len;
    }
    for (let i = 0; i <= len; i++) {
      if (matrix[x + i][y + len] !== '1') {
        return len;
      }
    }
    for (let j = 0; j <= len; j++) {
      if (matrix[x + len][y + j] !== '1') {
        return len;
      }
    }
    return checkBesides(x, y, len + 1);
  }
};

// @lc code=end
