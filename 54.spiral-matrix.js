/*
 * @lc app=leetcode id=54 lang=javascript
 *
 * [54] Spiral Matrix
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
  if (!matrix.length) {
    return [];
  }
  const res = [];
  const rows = matrix.length;
  const columns = matrix[0].length;
  let direction = 0;

  let i = 0;
  j = -1;
  while (res.length < rows * columns) {
    switch (direction) {
      case 0:
        j++;
        if (j === columns - 1 || matrix[i][j + 1] === null) {
          direction = 1;
        }
        break;
      case 1:
        i++;
        if (i === rows - 1 || matrix[i + 1][j] === null) {
          direction = 2;
        }
        break;
      case 2:
        j--;
        if (j === 0 || matrix[i][j - 1] === null) {
          direction = 3;
        }
        break;
      case 3:
        i--;
        if (i === 0 || matrix[i - 1][j] === null) {
          direction = 0;
        }
        break;
    }

    res.push(matrix[i][j]);
    matrix[i][j] = null;
  }
  return res;
};
// @lc code=end
