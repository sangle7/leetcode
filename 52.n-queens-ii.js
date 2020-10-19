/*
 * @lc app=leetcode id=52 lang=javascript
 *
 * [52] N-Queens II
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var totalNQueens = function (n) {
  const solutions = [];
  const subFunc = (arr) => {
    if (arr.length === n) {
      solutions.push(arr);
      return;
    }
    for (let i = 0; i < n; i++) {
      let key = [arr.length, i];
      let k = 0;
      let hadConflict = false;
      while (!hadConflict && k < arr.length) {
        if (canNotInsertHere(arr[k], key)) {
          hadConflict = true;
        }
        k++;
      }

      !hadConflict && subFunc([...arr, key]);
    }
  };

  subFunc([]);
  return solutions.length;
};

function canNotInsertHere(item1, item2) {
  if (item1[0] === item2[0]) {
    return true;
  }
  if (item1[1] === item2[1]) {
    return true;
  }
  if (Math.abs(item1[0] - item2[0]) === Math.abs(item1[1] - item2[1])) {
    return true;
  }
  return false;
}
// @lc code=end
