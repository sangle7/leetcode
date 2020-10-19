/*
 * @lc app=leetcode id=51 lang=javascript
 *
 * [51] N-Queens
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function (n) {
  const str = '.'.repeat(n - 1);
  const matrix = new Array(n).fill(new Array(n).fill('.'));
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
  return solutions.map((elem) => {
    let arr = [];
    for (let item of elem) {
      const tempstr = insertStr(str, [item[1]], 'Q');
      arr.push(tempstr);
    }
    return arr;
  });
};

function insertStr(soure, start, newStr) {
  return soure.slice(0, start) + newStr + soure.slice(start);
}

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
