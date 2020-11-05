/*
 * @lc app=leetcode id=174 lang=javascript
 *
 * [174] Dungeon Game
 */

// @lc code=start
/**
 * @param {number[][]} dungeon
 * @return {number}
 */
var calculateMinimumHP = function (dungeon) {
  // f(x) 为到某个点的总和
  // s(x) 为到某个点的沿途最小值
  const fMap = {};
  const sMap = {};

  const rows = dungeon.length;
  const cols = dungeon[0].length;

  const f = (m, n) => {
    if (fMap[m + '_' + n] != undefined) {
      return fMap[m + '_' + n];
    }
    let v = 0;
    if (m === 0 && n === 0) {
      v = dungeon[0][0];
    } else if (m === -1 || n === -1) {
      v = 0;
    } else if (s(m - 1, n) < s(m, n - 1)) {
      v = f(m, n - 1) + dungeon[m][n];
    } else if (s(m - 1, n) === s(m, n - 1)) {
      v = Math.max(f(m, n - 1), f(m - 1, n)) + dungeon[m][n];
    } else {
      v = f(m - 1, n) + dungeon[m][n];
    }
    fMap[m + '_' + n] = v;
    return v;
  };

  const s = (m, n) => {
    if (sMap[m + '_' + n] != undefined) {
      return sMap[m + '_' + n];
    }
    let v = 0;

    if (m === 0 && n === 0) {
      v = dungeon[0][0];
    } else if (m === -1 || n === -1) {
      v = -Infinity;
    } else {
      let min = Math.max(s(m - 1, n), s(m, n - 1));
      let fmn = f(m, n);
      v = Math.min(min, fmn);
    }

    sMap[m + '_' + n] = v;
    return v;
  };

  let m = rows - 1;
  let n = cols - 1;

  let res = s(m, n);

  console.error(fMap, sMap);

  return res < 0 ? 1 - res : 1;
};
// @lc code=end
