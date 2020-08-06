/*
 * @lc app=leetcode id=5 lang=javascript
 *
 * [5] Longest Palindromic Substring
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (str) {
  if (!str) {
    return '';
  }
  if (str.length === 1) {
    return str;
  }
  const newStr = '#' + str.split('').join('#') + '#';
  let p = new Array(newStr.length);
  p[0] = 1;
  let id = 0,
    mx = 0;

  for (let i = 1; i < newStr.length; i++) {
    p[i] = mx > i ? Math.min(p[2 * id - i], mx - i) : 1;
    while (newStr[i + p[i]] === newStr[i - p[i]] && i - p[i] >= 0) {
      p[i]++;
    }
    if (i + p[i] > mx) {
      mx = i + p[i];
      id = i;
    }
  }

  const res = p.reduce(
    (pre, ele, index) => {
      if (ele > pre.value) {
        pre.value = ele;
        pre.index = index;
      }
      return pre;
    },
    { value: 0, index: 0 }
  );
  const substr = newStr.substr(res.index - res.value + 1, 2 * res.value - 1);
  return substr.split('#').join('');
};

// @lc code=end
