/*
 * @lc app=leetcode id=29 lang=javascript
 *
 * [29] Divide Two Integers
 */

// @lc code=start
/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function (dividend, divisor) {
  let right = true;
  if (dividend > 0 && divisor < 0) {
    divisor = -divisor;
    right = false;
  }
  if (dividend < 0 && divisor > 0) {
    dividend = -dividend;
    right = false;
  }
  if (dividend < 0 && divisor < 0) {
    dividend = -dividend;
    divisor = -divisor;
  }

  let count = 0;
  let sum = 0;
  while (sum <= dividend) {
    if (sum) {
      sum += sum;
      count += count;
    } else {
      sum += divisor;
      count++;
    }
  }

  while (sum > dividend) {
    sum -= divisor;
    count--;
  }

  const res = right ? count : -count;

  if (res > 2147483647) {
    return 2147483647;
  }
  if (res < -2147483648) {
    return -2147483648;
  }
  return res;
};
// @lc code=end
