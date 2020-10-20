/*
 * @lc app=leetcode id=599 lang=javascript
 *
 * [599] Minimum Index Sum of Two Lists
 */

// @lc code=start
/**
 * @param {string[]} list1
 * @param {string[]} list2
 * @return {string[]}
 */
var findRestaurant = function (list1, list2) {
  let arr = [];
  let min = Infinity;
  const obj1 = list1.reduce(tomap, {});
  const obj2 = list2.reduce(tomap, {});

  for (let key in obj1) {
    if (obj2[key] !== undefined) {
      let sum = obj1[key] + obj2[key];
      if (sum < min) {
        min = sum;
        arr = [key];
      } else if (sum === min) {
        arr.push(key);
      }
    }
  }

  return arr;
};

function tomap(pre, elem, index) {
  pre[elem] = index;
  return pre;
}
// @lc code=end
