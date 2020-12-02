/*
 * @lc app=leetcode id=374 lang=javascript
 *
 * [374] Guess Number Higher or Lower
 */

// @lc code=start
/** 
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	            -1 if num is lower than the guess number
 *			             1 if num is higher than the guess number
 *                       otherwise return 0
 * var guess = function(num) {}
 */

/**
 * @param {number} n
 * @return {number}
 */
var guessNumber = function (n) {

  if (guess(n) === 0) return n

  let low = 1, high = n;
  while (n > 0) {
    const pick = (parseInt(high + low) / 2);
    const res = guess(pick);

    if (res === 0) {
      return pick
    }
    if (res === -1) {
      high = pick;
    }
    if (res === 1) {
      low = pick;
    }
  }
};
// @lc code=end

