/*
 * @lc app=leetcode id=179 lang=javascript
 *
 * [179] Largest Number
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {string}
 */
var largestNumber = function (nums) {
  // 全是0 直接returh '0'
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      count++;
    }
  }
  if (count === nums.length) {
    return '0';
  }
  let str = '';
  const map = nums.reduce((pre, elem) => {
    const str = String(elem);
    pre[str[0]] = pre[str[0]] || {};
    pre[str[0]].arr = pre[str[0]].arr || [];
    pre[str[0]].arr.push(String(elem));
    pre[str[0]].len = Math.max(str.length, pre[str[0]].len || 0);
    return pre;
  }, {});

  for (let key in map) {
    const arr = map[key].arr;
    const len = map[key].len;

    const str = new Array(len).fill(key).join('');

    const arr2 = arr.map((elem) => {
      if (elem.length < len) {
        return { origin: elem, after: (elem + str).substr(0, len) };
      } else {
        return { origin: elem, after: elem };
      }
    });

    if (key == 8) {
      console.error(arr2);
    }

    // console.error(arr2);
    map[key] = arr2
      .sort((a, b) => {
        if (b.after > a.after) {
          return 1;
        } else if (b.after < a.after) {
          return -1;
        } else {
          let minLen = a.origin.length;
          let min = a.origin;
          if (a.origin.length > b.origin.length) {
            minLen = b.origin.length;
            min = b.origin;
          }

          if (minLen) {
            if (min[minLen - 1] > key) {
              return a.origin.length - b.origin.length;
            } else {
              return b.origin.length - a.origin.length;
            }
          } else {
            return 0;
          }
        }
      })
      .map((e) => e.origin);
  }

  let i = 9;
  while (i >= 0) {
    str += map[i] ? map[i].join('') : '';
    i--;
  }

  return str;
};

// @lc code=end
