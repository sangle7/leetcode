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
  while (!isSolved(board)) {
    for (x = 0; x < 9; x++) {
      for (y = 0; y < 9; y++) {
        board[y][x] = digit(board, x, y);
      }
    }
  }

  return board;
};

function digit(puzzle, x, y) {
  if (puzzle[y][x] !== 0) return puzzle[y][x];

  var row = puzzle[y];
  var column = columnArray(puzzle, x);
  var grid = gridArray(puzzle, x, y);

  var knowns = row.concat(column, grid);

  var possibilities = [1, 2, 3, 4, 5, 6, 7, 8, 9].filter(function (item) {
    return knowns.indexOf(item) === -1;
  });

  return possibilities.length == 1 ? possibilities[0] : 0;
}

function columnArray(puzzle, idx) {
  return puzzle.map(function (row) {
    return row[idx];
  });
}

function gridArray(puzzle, x, y) {
  x = Math.floor(x / 3) * 3;
  y = Math.floor(y / 3) * 3;

  var arr = [];

  for (i = x; i < x + 3; i++) {
    for (j = y; j < y + 3; j++) {
      arr.push(puzzle[j][i]);
    }
  }

  return arr;
}

function sum(arr) {
  return arr.reduce(function (a, n) {
    return a + n;
  }, 0);
}

function winningRow(arr) {
  return (
    sum(
      arr.map(function (num) {
        return Math.pow(2, num - 1);
      })
    ) == 511
  );
}

function isSolved(puzzle) {
  return (
    puzzle.filter(function (row) {
      return !winningRow(row);
    }).length === 0
  );
}
// @lc code=end
