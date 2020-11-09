/*
 * @lc app=leetcode id=452 lang=javascript
 *
 * [452] Minimum Number of Arrows to Burst Balloons
 */

// @lc code=start
/**
 * @param {number[][]} points
 * @return {number}
 */
var findMinArrowShots = function (points) {
  //[1,6] [2,8] [10,16]=> [2,6] [10,16]
  let i = 0;
  let prevMerged = false;
  while (i < points.length - 1) {
    let j = i + 1;
    while (j < points.length) {
      const res = getCommon(points[i], points[j]);
      if (res.length === 1) {
        points[i] = res[0];
        points.splice(j, 1);
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
  return points.length;
};

function getCommon(interval1, interval2) {
  let i1 = null;
  let i2 = null;
  //[1,6] [2,5]
  if (interval1[0] < interval2[0]) {
    [i1, i2] = [interval1, interval2];
  } else {
    [i1, i2] = [interval2, interval1];
  }

  let [min1, max1] = i1;
  let [min2, max2] = i2;

  // 没有交集
  if (i2[0] > i1[1]) {
    return [i1, i2];
  } else {
    return [[Math.max(min1, min2), Math.min(max1, max2)]];
  }
}
// @lc code=end
