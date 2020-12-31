/*
 * @lc app=leetcode id=87 lang=javascript
 *
 * [87] Scramble String
 */

// @lc code=start
/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var isScramble = function (s1, s2) {
  if (s1.length != s2.length) return false;
  if (s1 == s2) return true;
  let str1 = s1,
    str2 = s2;
  str1 = str1.split('').sort().join('');
  str2 = str2.split('').sort().join('');
  if (str1 != str2) return false;

  for (let i = 1; i < s1.length; i++) {
    let s11 = s1.substr(0, i);
    let s12 = s1.substr(i);
    let s21 = s2.substr(0, i);
    let s22 = s2.substr(i);
    if (isScramble(s11, s21) && isScramble(s12, s22)) return true;
    s21 = s2.substr(s1.length - i);
    s22 = s2.substr(0, s1.length - i);
    if (isScramble(s11, s21) && isScramble(s12, s22)) return true;
  }
  return false;
};
// @lc code=end
