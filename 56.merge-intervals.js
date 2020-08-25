/*
 * @lc app=leetcode id=56 lang=javascript
 *
 * [56] Merge Intervals
 */

// @lc code=start
/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {w
  const array = [];
  for (let i = 0; i < intervals.length; i++) {
    for (let j = i + 1; j < intervals.length; j++) {
      const [imin, imax] = intervals[i];
      const [jmin, jmax] = intervals[j];
      if (imax <= jmin) {
        max = jmax;
        min = imin;
      }
      if (jmax <= imin) {
        max = imax;
        min = jmin;
      }
    }
  }
  return array;
};
// @lc code=end
