/*
 * @lc app=leetcode id=498 lang=javascript
 *
 * [498] Diagonal Traverse
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var findDiagonalOrder = function (matrix) {
  if (!matrix.length) {
    return [];
  }
  const rows = matrix.length;
  const columns = matrix[0].length;
  let rowIndex = 0;
  let columnIndex = 0;
  let direction = true;

  const arr = [];

  while (arr.length < rows * columns) {
    arr.push(matrix[rowIndex][columnIndex]);

    if (
      (direction && rowIndex === 0 && columnIndex < columns - 1) ||
      (rowIndex === rows - 1 && !direction)
    ) {
      columnIndex++;
      direction = !direction;
    } else if (
      (columnIndex === 0 && !direction) ||
      (columnIndex === columns - 1 && direction)
    ) {
      rowIndex++;
      direction = !direction;
    } else {
      if (direction) {
        rowIndex--;
        columnIndex++;
      } else {
        rowIndex++;
        columnIndex--;
      }
    }
  }

  return arr;
};
// @lc code=end
