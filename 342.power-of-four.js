/*
 * @lc app=leetcode id=342 lang=javascript
 *
 * [342] Power of Four
 */

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfFour = function (num) {
  // solution 1
  // while (num && num % 4 === 0) {
  //   num /= 4;
  // }
  // return num === 1;
  // solution 2
  // 在确定其是2的次方数了之后，发现只要是4的次方数，减1之后可以被3整除
  return num > 0 && !(num & (num - 1)) && (num - 1) % 3 == 0;
};
// @lc code=end
