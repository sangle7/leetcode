/*
 * @lc app=leetcode id=542 lang=javascript
 *
 * [542] 01 Matrix
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var updateMatrix = function (matrix) {
  const rows = matrix.length;
  const cols = matrix[0].length;

  const array0s = {};

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (matrix[i][j] === 0) {
        array0s[i + '_' + j] = true;
      }
    }
  }

  let res = [];
  for (var i = 0; i < rows; i++) {
    res[i] = new Array(cols);
  }

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (array0s[i + '_' + j]) {
        res[i][j] = 0;
      } else {
        res[i][j] = calculateN(i, j);
      }
    }
  }

  return res;

  function calculateN(row, col) {
    let startArr = [[row, col]];
    let shouldGo = true;
    const subFunc = (r, distance) => {
      if (!shouldGo) {
        return distance;
      }
      let arr = [];
      for (let i = 0; i < r.length; i++) {
        let [row, col] = r[i];
        checkAndPush(arr, row, col + 1);
        checkAndPush(arr, row, col - 1);
        checkAndPush(arr, row + 1, col);
        checkAndPush(arr, row - 1, col);
      }
      return subFunc(arr, distance + 1);

      function checkAndPush(arr, r, c) {
        if (r >= 0 && r < rows && c >= 0 && c < cols) {
          if (array0s[r + '_' + c]) {
            shouldGo = false;
          } else {
            arr.push([r, c]);
          }
        }
      }
    };

    return subFunc(startArr, 0);
  }
};
// @lc code=end
