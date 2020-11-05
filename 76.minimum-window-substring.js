/*
 * @lc app=leetcode id=76 lang=javascript
 *
 * [76] Minimum Window Substring
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
  const obj = t.split('').reduce((elem, pre) => {
    pre[elem] = pre[elem] || 0;
    pre[elem]++;
    return pre;
  }, {});

  let i = 0;
  let copyT = t;
  let str = '';
  // find First valid
  while (i < s.length) {
    const index = copyT.indexOf(s[i]);
    if (index !== -1) {
      copyT = removeCharacterIndex(copyT, index);
    }
    if (!copyT) {
      break;
    } else {
      i++;
    }
  }

  // window scroll to find next
};

function removeCharacterIndex(str, index) {
  return str.slice(0, index) + str.slice(index + 1);
}
// @lc code=end
