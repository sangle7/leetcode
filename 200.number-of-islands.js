/*
 * @lc app=leetcode id=200 lang=javascript
 *
 * [200] Number of Islands
 */

// @lc code=start
/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
  if (!grid.length) {
    return 0;
  }
  let num = 0;
  const rows = grid.length;
  const columns = grid[0].length;

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < columns; j++) {
      if (grid[i][j] === '1' || grid[i][j] === '2') {
        if (isIsland(i, j)) {
          num++;
        }
        grid[i][j] = '2';
      }
    }
  }

  return num;

  function isIsland(i, j) {
    const arr = [
      i > 0 ? grid[i - 1][j] : 0,
      i < rows - 1 ? grid[i + 1][j] : 0,
      j > 0 ? grid[i][j - 1] : 0,
      j < columns - 1 ? grid[i][j + 1] : 0,
    ];

    if (i > 0 && grid[i - 1][j] === '1') {
      grid[i - 1][j] = '2';
    }

    if (i < rows - 1 && grid[i + 1][j] === '1') {
      grid[i + 1][j] = '2';
    }

    if (j > 0 && grid[i][j - 1] === '1') {
      grid[i][j - 1] = '2';
    }

    if (j < columns - 1 && grid[i][j + 1] === '1') {
      grid[i][j + 1] = '2';
    }

    if (arr.indexOf('2') > -1) {
      return false;
    }
    return true;
  }
};
// @lc code=end
