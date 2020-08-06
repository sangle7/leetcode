/*
 * @lc app=leetcode id=191 lang=javascript
 *
 * [191] Number of 1 Bits
 */
/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
  var res = 0;
  for (i = n; i !== 0; ) {
    if (i % 2 === 1) {
      res++;
    }
    i = parseInt(i / 2);
  }
  return res;
};
