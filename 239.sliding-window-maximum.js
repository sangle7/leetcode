/*
 * @lc app=leetcode id=239 lang=javascript
 *
 * [239] Sliding Window Maximum
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function (nums, k) {
  let { max, index } = countMax(nums.slice(0, k));
  let tempMax = max;
  let tempMaxIndex = index;
  const solutions = [tempMax];
  let i = 1;
  while (i + k <= nums.length) {
    if (tempMaxIndex >= i) {
      if (nums[i + k - 1] > tempMax) {
        tempMax = nums[i + k - 1];
        tempMaxIndex = i + k - 1;
      }
    } else {
      let { max, index } = countMax(nums.slice(i, i + k));
      tempMax = max;
      tempMaxIndex = index;
    }
    solutions.push(tempMax);
    i++;
  }
  return solutions;
};

function countMax(array) {
  const obj = array.reduce(
    (pre, el, index) => {
      if (pre.max <= el) {
        pre.max = el;
        pre.index = index;
      }
      return pre;
    },
    { max: -Infinity, index: 0 }
  );

  return obj;
}
// @lc code=end
