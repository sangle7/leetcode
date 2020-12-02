/*
 * @lc app=leetcode id=492 lang=javascript
 *
 * [492] Construct the Rectangle
 */

// @lc code=start
/**
 * @param {number} area
 * @return {number[]}
 */
var constructRectangle = function (area) {
  const sqrt = Math.sqrt(area);
  if (isInteger(sqrt)) {
    return [sqrt, sqrt];
  }

  for (let i = Math.floor(sqrt); i >= 1; i--) {
    if (isInteger(area / i)) {
      return [area / i, i];
    }
  }
};

function isInteger(obj) {
  return obj % 1 === 0;
}
// @lc code=end
