/*
 * @lc app=leetcode id=451 lang=javascript
 *
 * [451] Sort Characters By Frequency
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function (s) {
  const obj = s.split('').reduce((pre, el) => {
    pre[el] = pre[el] || 0;
    pre[el]++;
    return pre;
  }, {});
  //t:1,r:1e:2
  // const frequencyObj = {};
  // for (let key in obj) {
  //   frequencyObj[obj[key]] = frequencyObj[obj[key]] || [];
  //   frequencyObj[obj[key]].push(key);
  // }
  const sorted = Object.entries(obj).sort((a, b) => b[1] - a[1]);
  // 3:[t,r], 2:[e]
  //[[t:2],[y:2]]

  return sorted.map((el) => el[0].repeat(el[1])).join('');
};
// @lc code=end
