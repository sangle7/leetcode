/*
 * @lc app=leetcode id=207 lang=javascript
 *
 * [207] Course Schedule
 */

// @lc code=start
/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function (numCourses, prerequisites) {
  const prereMap = {};
  const validMap = {};
  let status = true;
  for (let i = 0; i < prerequisites.length; i++) {
    let [m, n] = prerequisites[i];
    prereMap[m] = prereMap[m] || [];
    prereMap[m].push(n);
  }
  // { 2: [1,0], 1:[0], 3:[2]}

  for (let key in prereMap) {
    subFunc(key, prereMap[key], [key]);
  }

  function subFunc(key, arr, hasGone) {
    if (status && arr && arr.length) {
      for (let elem of arr) {
        if (hasGone.indexOf(elem) > -1) {
          status = false;
        } else {
          subFunc(elem, prereMap[elem], [...hasGone, elem]);
        }
      }
    }
  }

  return status;
};
// @lc code=end
