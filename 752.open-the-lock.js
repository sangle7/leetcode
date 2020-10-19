/*
 * @lc app=leetcode id=752 lang=javascript
 *
 * [752] Open the Lock
 */

// @lc code=start
/**
 * @param {string[]} deadends
 * @param {string} target
 * @return {number}
 */
var openLock = function (deadends, target) {
  let count = 0;
  let res = 0;
  const hasGone = {};

  if (target === '0000') {
    return 0;
  }

  if (deadends.indexOf('0000') > -1) {
    return -1;
  }

  const subFunc = (arr) => {
    // console.error(arr);
    if (!arr.length) {
      return -1;
    }
    count++;
    let nextArr = [];

    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < 8; j++) {
        let tempArr = arr[i].split('');
        if (j < 4) {
          tempArr[j % 4] = Number(tempArr[j % 4]) + 1;
          if (tempArr[j % 4] == 10) {
            tempArr[j % 4] = 0;
          }
        } else {
          tempArr[j % 4] = Number(tempArr[j % 4]) - 1;
          if (tempArr[j % 4] === -1) {
            tempArr[j % 4] = 9;
          }
        }
        let next = tempArr.join('');
        if (next === target) {
          // console.error(next);
          res = count;
          return;
        }
        if (deadends.indexOf(next) === -1 && !hasGone[next]) {
          hasGone[next] = true;
          nextArr.push(next);
        }
      }
    }
    subFunc(nextArr);
  };

  subFunc(['0000']);

  return res || -1;
};
// @lc code=end
