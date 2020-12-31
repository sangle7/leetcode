/*
 * @lc app=leetcode id=134 lang=javascript
 *
 * [134] Gas Station
 */

// @lc code=start
/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function (gas, cost) {
  const len = gas.length;
  for (let i = 0; i < gas.length; i++) {
    let nowValue = gas[i];
    let nowIndex = i;
    let step = 0;
    while (step < len) {
      if (nowValue < cost[nowIndex]) {
        break;
      }
      nowValue -= cost[nowIndex];
      if (nowIndex === len - 1) {
        nowIndex = 0;
      } else {
        nowIndex++;
      }
      nowValue += gas[nowIndex];
      step++;
    }
    // console.error(step);
    if (step === len) {
      return i;
    }
  }
  return -1;
};
// @lc code=end
