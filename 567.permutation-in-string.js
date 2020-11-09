/*
 * @lc app=leetcode id=567 lang=javascript
 *
 * [567] Permutation in String
 */

// @lc code=start
/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function (s1, s2) {
  // // {a:1,b:1}
  // const countObj = s1.split('').reduce((pre, el) => {
  //   pre[el] = pre[el] || 0;
  //   pre[el]++;
  // }, {});

  // const len = s1.length;

  // for(let i=0;i<)

  const str = s1.split('').sort().join('');
  const len = s1.length;
  for (let i = 0; i <= s2.length - s1.length; i++) {
    const subStr = s2.substr(i, len);
    const sortedStr = subStr.split('').sort().join('');
    if (str === sortedStr) {
      return true;
    }
  }
  return false;
};
// @lc code=end
