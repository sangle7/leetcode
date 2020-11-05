/*
 * @lc app=leetcode id=57 lang=javascript
 *
 * [57] Insert Interval
 */

// @lc code=start
/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function (intervals, newInterval) {
  const newIntervals = intervals.concat([newInterval]);

  let i = 0;
  let prevMerged = false;
  while (i < newIntervals.length - 1) {
    let j = i + 1;
    while (j < newIntervals.length) {
      const res = mergeTwoInterval(newIntervals[i], newIntervals[j]);
      if (res.length === 1) {
        newIntervals[i] = res[0];
        newIntervals.splice(j, 1);
        prevMerged = true;
      } else {
        newIntervals[i] = res[0]
        newIntervals[j] = res[1]
        j++;
      }
    }
    if (!prevMerged) {
      i++;
    } else {
      prevMerged = false;
    }
  }
  return newIntervals;
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
