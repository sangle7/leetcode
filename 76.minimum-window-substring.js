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
  if (s.length < t.length) {
    return '';
  }
  const map = t.split('').reduce((pre, elem) => {
    pre[elem] = pre[elem] || 0;
    pre[elem]++;
    return pre;
  }, {});

  var min = Number.MAX_SAFE_INTEGER;
  var count = t.length;
  let head = 0;
  let start = 0;
  let end = 0;
  while (end < s.length) {
    if (map[s[end]] !== undefined) {
      if (map[s[end]] > 0) count--;
      map[s[end]]--;
    }

    end++;

    while (count === 0) {
      if (end - start < min) {
        min = end - start;
        head = start;
      }

      if (map[s[start]] !== undefined) {
        if (map[s[start]] === 0) count++;
        map[s[start]]++;
      }

      start++;
    }
  }

  return min === Number.MAX_SAFE_INTEGER ? '' : s.substr(head, min);
};
// @lc code=end
