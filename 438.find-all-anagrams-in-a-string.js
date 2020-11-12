/*
 * @lc app=leetcode id=438 lang=javascript
 *
 * [438] Find All Anagrams in a String
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function (s, p) {
  const obj = p.split('').reduce((pre, el) => {
    pre[el] = pre[el] || 0;
    pre[el]++;
    return pre;
  }, {});
  const solution = [];
  //{a:1,b:1,c:1}
  const len = p.length;
  let i = 0;
  let isPrevValid = false;
  while (i + len <= s.length) {
    if (isPrevValid) {
      if (s[i + len - 1] === s[i - 1]) {
        solution.push(i);
      } else {
        isPrevValid = false;
      }
    } else if (validStr(s.substr(i, len), Object.assign({}, obj))) {
      solution.push(i);
      isPrevValid = true;
    }
    i++;
  }
  return solution;
};

function validStr(str, obj) {
  for (let i = 0; i < str.length; i++) {
    if (!obj[str[i]]) {
      return false;
    }
    obj[str[i]]--;
  }
  return true;
}
// @lc code=end
