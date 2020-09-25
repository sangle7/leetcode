/*
 * @lc app=leetcode id=412 lang=javascript
 *
 * [412] Fizz Buzz
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function (n) {
  const arr = [];

  for (let i = 1; i <= n; i++) {
    let res = String(i);
    if (i % 3 === 0) {
      res = 'Fizz'
    }
    if (i % 5 === 0) {
      res = 'Buzz'
    }
    if (i % 15 === 0) {
      res = 'FizzBuzz'
    }

    arr.push(res)
  }
  return arr;
};
// @lc code=end
