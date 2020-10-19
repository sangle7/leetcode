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

  let visited = {};

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < columns; j++) {
      if (grid[i][j] === '1' && !visited[i + '_' + j]) {
        drawIsland([[i, j]]);
        num++;
      }
    }
  }

  return num;

  function drawIsland(r) {
    if (!r.length) {
      return;
    }
    const arr = [];
    for (let k = 0; k < r.length; k++) {
      const [i, j] = r[k];
      visited[i + '_' + j] = true;

      checkAndPush(arr, i - 1, j);
      checkAndPush(arr, i + 1, j);
      checkAndPush(arr, i, j - 1);
      checkAndPush(arr, i, j + 1);
    }
    drawIsland(arr);
  }

  function checkAndPush(arr, row, col) {
    if (
      row >= 0 &&
      row < rows &&
      col >= 0 &&
      col < columns &&
      !visited[row + '_' + col] &&
      grid[row][col] === '1'
    ) {
      visited[row + '_' + col] = true;
      arr.push([row, col]);
    }
  }
};
// @lc code=end
