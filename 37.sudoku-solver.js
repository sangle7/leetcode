/*
 * @lc app=leetcode id=37 lang=javascript
 *
 * [37] Sudoku Solver
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solveSudoku = function (board) {
  var isComplete = false;
  dfs(0, 0);
  function dfs(x, y) {
    if (isComplete) {
      return;
    }
    var candidates = findCandidate(x, y);
    if (x === 8 && y == 8) {
      if (board[8][8] === '.') {
        board[8][8] = candidates[0];
      }
      isComplete = true;
      return;
    }

    if (board[x][y] !== '.') {
      if (y === 8) {
        dfs(x + 1, 0);
        return;
      } else {
        dfs(x, y + 1);
        return;
      }
    }
    for (var i = 0; i < candidates.length; i++) {
      board[x][y] = candidates[i];
      if (y === 8) {
        dfs(x + 1, 0);
      } else {
        dfs(x, y + 1);
      }
      if (!isComplete) {
        board[x][y] = '.';
      } else {
        return;
      }
    }
  }

  function findCandidate(x, y) {
    var set = new Set();
    var candidate = [];
    var cell = -1;
    //row
    for (i = 0; i < 9; i++) {
      cell = board[x][i];
      if (!set.has(cell)) {
        set.add(cell);
      }
    }
    //column
    for (i = 0; i < 9; i++) {
      cell = board[i][y];
      if (!set.has(cell)) {
        set.add(cell);
      }
    }
    //square
    var offsetX = parseInt(x / 3) * 3;
    var offsetY = parseInt(y / 3) * 3;
    for (i = 0; i <= 2; i++) {
      for (j = 0; j <= 2; j++) {
        cell = board[i + offsetX][j + offsetY];
        if (!set.has(cell)) {
          set.add(cell);
        }
      }
    }
    //find candidate
    for (i = 1; i <= 9; i++) {
      if (!set.has(i + '')) {
        candidate.push(i + '');
      }
    }
    return candidate;
  }
};
// @lc code=end
