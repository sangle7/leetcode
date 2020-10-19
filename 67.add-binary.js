/*
 * @lc app=leetcode id=67 lang=javascript
 *
 * [67] Add Binary
 */

// @lc code=start
/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
  var res = [];
  var n1 = a.length;
  var n2 = b.length;
  var a = a.split('');
  var b = b.split('');
  var carry = 0;
  if (n1 < n2) {
    for (var i = 0; i < n2 - n1; ++i) {
      a.unshift(0);
    }
  }
  if (n1 > n2) {
    for (var i = 0; i < n1 - n2; ++i) {
      b.unshift(0);
    }
  }
  for (var i = Math.max(n1, n2) - 1; i >= 0; i--) {
    var sum = Number(a[i]) + Number(b[i]) + carry;
    res.unshift(sum % 2);
    carry = Math.floor(sum / 2);
  }
  if (carry) {
    res.unshift(1);
  }
  return res.join('');
};
// @lc code=end
