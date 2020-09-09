/*
 * @lc app=leetcode id=120 lang=javascript
 *
 * [120] Triangle
 */

// @lc code=start
/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function (triangle) {
  //广度优先
  const height = triangle.length;
  const anotherTriangle = [];

  for (let i = 0; i < height; i++) {
    for (let j = 0; j < triangle[i].length; j++) {
      const left = i
        ? isNaN(anotherTriangle[i - 1][j - 1])
          ? Infinity
          : anotherTriangle[i - 1][j - 1]
        : 0;
      const right = i
        ? isNaN(anotherTriangle[i - 1][j])
          ? Infinity
          : anotherTriangle[i - 1][j]
        : 0;
      const sum = Math.min(left, right) + triangle[i][j];
      anotherTriangle[i] = anotherTriangle[i] || [];
      anotherTriangle[i][j] = sum;
    }
  }

  return Math.min(...anotherTriangle[height - 1]);
};
// @lc code=end
