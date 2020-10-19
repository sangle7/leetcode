/*
 * @lc app=leetcode id=84 lang=javascript
 *
 * [84] Largest Rectangle in Histogram
 */

// @lc code=start
/**
 * @param {number[]} heights
 * @return {number}
 */
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
