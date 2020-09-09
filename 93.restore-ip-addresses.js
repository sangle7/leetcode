/*
 * @lc app=leetcode id=93 lang=javascript
 *
 * [93] Restore IP Addresses
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function (s) {
  if (s.length > 12 || s.length < 4) {
    return [];
  }
  const solutions = [];

  const subFunc = (str, out, index) => {
    if (!str && out.length === 4) {
      solutions.push(out.join('.'));
    }
    if (!str || index > 3) {
      return;
    }
    out[index] = out[index] || '';
    out[index] += str[0];
    const num = parseInt(out[index] + str[1])
    if ( num > 0 && num <= 255 && out[index] !== '0') {
      subFunc(str.substr(1), [...out], index);
    }
    subFunc(str.substr(1), [...out], index + 1);
  };

  subFunc(s, [], 0);

  return Array.from(new Set(solutions));
};
// @lc code=end
