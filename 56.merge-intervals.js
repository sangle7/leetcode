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
var merge = function (intervals) {
  const array = [];
  for (let i = 0; i < intervals.length; i++) {
    const [imin, imax] = intervals[i];
    let maxInterval = intervals[i];
    for (let j = i + 1; j < intervals.length; j++) {
      const [jmin, jmax] = intervals[j];
      let min = imin;
      let max = imax;
      if (imax >= jmin && imin <= jmax) {
        max = jmax;
      }
      if (jmax <= imin && imax >= jmin) {
        min = jmin;
      }
      if (maxInterval[0] <= min && maxInterval[1] >= max) {
      } else {
        maxInterval = [min, max];
        array.push([min, max]);
      }
    }
  }
  return array;
};
// @lc code=end
