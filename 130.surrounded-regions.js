/*
 * @lc app=leetcode id=130 lang=javascript
 *
 * [130] Surrounded Regions
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function (board) {
  const rows = board.length;
  if (!rows) {
    return;
  }

  const columns = board[0].length;
  if (!columns) {
    return;
  }

  let visited = {};

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < columns; j++) {
      if (i === 0 || i === rows - 1 || j === 0 || j === columns - 1) {
        if (board[i][j] === 'O' && !visited[i + '_' + j]) {
          drawIsland([[i, j]]);
        }
      }
    }
  }

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < columns; j++) {
      if (board[i][j] === 'O' && !visited[i + '_' + j]) {
        board[i][j] = 'X';
      }
    }
  }

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
      board[row][col] === 'O'
    ) {
      visited[row + '_' + col] = true;
      arr.push([row, col]);
    }
  }
};
// @lc code=end

// @lc code=end
