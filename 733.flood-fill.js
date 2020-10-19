/*
 * @lc app=leetcode id=733 lang=javascript
 *
 * [733] Flood Fill
 */

// @lc code=start
/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} newColor
 * @return {number[][]}
 */
var floodFill = function (image, sr, sc, newColor) {
  const rows = image.length;
  const columns = image[0].length;
  let val = image[sr][sc];
  let visited = {};

  const subFunc = (r) => {
    console.error(JSON.stringify(r));
    if (!r.length) {
      return;
    }
    const arr = [];
    for (let k = 0; k < r.length; k++) {
      const [i, j] = r[k];
      image[i][j] = newColor;
      visited[i + '_' + j] = true;

      checkAndPush(arr, i - 1, j);
      checkAndPush(arr, i + 1, j);
      checkAndPush(arr, i, j - 1);
      checkAndPush(arr, i, j + 1);
    }
    subFunc(arr);
  };

  subFunc([[sr, sc]]);

  return image;

  function checkAndPush(arr, row, col) {
    if (
      row >= 0 &&
      row < rows &&
      col >= 0 &&
      col < columns &&
      !visited[row + '_' + col] &&
      image[row][col] === val
    ) {
      arr.push([row, col]);
    }
  }
};
// @lc code=end
