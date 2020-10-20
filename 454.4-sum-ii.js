/*
 * @lc app=leetcode id=454 lang=javascript
 *
 * [454] 4Sum II
 */

// @lc code=start
/**
 * @param {number[]} A
 * @param {number[]} B
 * @param {number[]} C
 * @param {number[]} D
 * @return {number}
 */
var fourSumCount = function (A, B, C, D) {
  let count = 0;
  const mapFirst = {};
  const mapSecond = {};
  for (let a of A) {
    for (let b of B) {
      let sum = a + b;
      mapFirst[sum] = mapFirst[sum] || 0;
      mapFirst[sum]++;
    }
  }

  for (let c of C) {
    for (let d of D) {
      let sum = c + d;
      mapSecond[sum] = mapSecond[sum] || 0;
      mapSecond[sum]++;
    }
  }

  for (let key in mapFirst) {
    if (mapSecond[-key]) {
      count += mapSecond[-key] * mapFirst[key];
    }
  }

  return count;
};
// @lc code=end
