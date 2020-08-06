/*
 * @lc app=leetcode id=59 lang=javascript
 *
 * [59] Spiral Matrix II
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function (n) {
  const matrix = new Array(n).fill(1).map((ele) =>  []);

  let count = 1;
  let i = 0;
  let j = 0;
  let direction = 'right';

  while (count <= n * n) {
    switch (direction) {
      case 'right':
        matrix[i][j] = count;
        count++;
        if (j === n - 1 || matrix[i][j + 1]) {
          direction = 'down';
          i++;
        } else {
          j++;
        }
        break;
      case 'down':
        matrix[i][j] = count;
        count++;
        if (i === n - 1 || matrix[i + 1][j]) {
          direction = 'left';
          j--;
        } else {
          i++;
        }
        break;
      case 'left':
        matrix[i][j] = count;
        count++;
        if (j === 0 || matrix[i][j - 1]) {
          direction = 'up';
          i--;
        } else {
          j--;
        }
        break;
      case 'up':
        matrix[i][j] = count;
        count++;
        if (i === 0 || matrix[i - 1][j]) {
          direction = 'right';
          j++;
        } else {
          i--;
        }
        break;
    }
  }

  return matrix;
};
// @lc code=end
