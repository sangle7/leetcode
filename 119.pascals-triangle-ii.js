/*
 * @lc app=leetcode id=119 lang=javascript
 *
 * [119] Pascal's Triangle II
 */

// @lc code=start
/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function (numRows) {
  if (numRows === 0) {
    return [1];
  } else {
    previousRow = getRow(numRows - 1);
    const arr = [];
    arr.push(1);
    for (let i = 0; i < previousRow.length - 1; i++) {
      arr.push(previousRow[i] + previousRow[i + 1]);
    }
    arr.push(1);
    return arr;
  }
};
// @lc code=end
