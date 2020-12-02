/*
 * @lc app=leetcode id=482 lang=javascript
 *
 * [482] License Key Formatting
 */

// @lc code=start
/**
 * @param {string} S
 * @param {number} K
 * @return {string}
 */
var licenseKeyFormatting = function (S, K) {
  let str = S.replace(/-/g, '').toUpperCase();
  let result = '';
  let countK = 0;
  for (let i = str.length - 1; i >= 0; i--) {
    letter = str[i];
    result += letter;
    countK++;
    if (countK == K) {
      result += '-';
      countK = 0;
    }
  }
  if (result != 0 && result[result.length - 1] == '-') {
    result = result.substring(0, result.length - 1);
  }
  return result.split('').reverse().join('');
};
// @lc code=end
