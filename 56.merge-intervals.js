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
  let i = 0;
  let prevMerged = false;
  while (i < intervals.length - 1) {
    let j = i + 1;
    while (j < intervals.length) {
      const res = mergeTwoInterval(intervals[i], intervals[j]);
      if (res.length === 1) {
        intervals[i] = res[0];
        intervals.splice(j, 1);
        prevMerged = true;
      } else {
        j++;
      }
    }
    if (!prevMerged) {
      i++;
    } else {
      prevMerged = false;
    }
  }
  return intervals;
};

function mergeTwoInterval(interval1, interval2) {
  let i1 = null;
  let i2 = null;

  if (interval1[0] < interval2[0]) {
    [i1, i2] = [interval1, interval2];
  } else {
    [i1, i2] = [interval2, interval1];
  }

  // 没有交集
  if (i2[0] > i1[1]) {
    return [i1, i2];
  } else {
    let start = i1[0];
    let end = Math.max(i1[1], i2[1]);
    return [[start, end]];
  }
}
// @lc code=end
