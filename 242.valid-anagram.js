/*
 * @lc app=leetcode id=242 lang=javascript
 *
 * [242] Valid Anagram
 */
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
  if (s.length !== t.length) {
    return false;
  }
  const arr1 = s.split('');
  const arr2 = t.split('');
  const map1 = arr1.reduce((pre, e) => {
    pre[e] = pre[e] || 0;
    pre[e] += 1;
    return pre
  }, {});

  for (let i of arr2) {
    if (!map1[i]) {
      return false;
    }
    map1[i]--;
    if (map1[i] < 0) {
      return false;
    }
  }
  return true
};
