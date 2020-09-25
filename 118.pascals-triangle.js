/*
 * @lc app=leetcode id=118 lang=javascript
 *
 * [118] Pascal's Triangle
 */

// @lc code=start
/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
  const tempMap = { 1: [1] };
  const solutions = [];
  for (let i = 1; i <= numRows; i++) {
    solutions.push(generteRow(i));
  }

  return solutions;

  function generteRow(row) {
    if (row === 1) {
      return [1];
    } else {
      previousRow = tempMap[row - 1];
      const arr = [];
      arr.push(1);
      for (let i = 0; i < previousRow.length - 1; i++) {
        arr.push(previousRow[i] + previousRow[i + 1]);
      }
      arr.push(1);
      tempMap[row] = arr;
      return arr;
    }
  }
};
// @lc code=end
