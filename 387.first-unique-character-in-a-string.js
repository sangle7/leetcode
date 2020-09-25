/*
 * @lc app=leetcode id=387 lang=javascript
 *
 * [387] First Unique Character in a String
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
 var firstUniqChar = function (s) {
  if (!s) {
    return -1;
  }
  const obj = {};
  for (let i = 0; i < s.length; i++) {
    obj[s[i]] = obj[s[i]] || { first: i, count: 0 };
    obj[s[i]].count++;
  }

  // { f: {first: 1,count: 3}}

  const arr = [];
  for (let key in obj) {
    if (obj[key].count === 1) {
      arr.push({ key, first: obj[key].first });
    }
  }

  const arr2 = arr.sort((a, b) => a.first - b.first)

  return arr2.length ? arr[0].first : -1

};

// @lc code=end

