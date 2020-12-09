/*
 * @lc app=leetcode id=85 lang=javascript
 *
 * [85] Maximal Rectangle
 */

// @lc code=start
/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalRectangle = function (matrix) {
  if (!matrix.length) {
    return 0;
  }
  let res = 0;
  let height = new Array(matrix[0].length).fill(0);
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      height[j] = matrix[i][j] == '0' ? 0 : 1 + height[j];
    }
    res = Math.max(res, largestRectangleArea(height));
  }
  return res;
};

var largestRectangleArea = function (heights) {
  let rectangle = 0;
  for (let i = 0; i < heights.length; i++) {
    let height = heights[i];
    for (let j = i; j < heights.length; j++) {
      height = Math.min(height, heights[j]);
      const width = j - i + 1;
      rectangle = Math.max(rectangle, width * height);
    }
  }
  return rectangle;
};
// @lc code=end
