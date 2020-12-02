/*
 * @lc app=leetcode id=605 lang=javascript
 *
 * [605] Can Place Flowers
 */

// @lc code=start
/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function (flowerbed, n) {
  flowerbed.forEach((elem, index) => {
    if (elem === 1) {
      if (index + 1 <= flowerbed.length - 1) flowerbed[index + 1] = 2;
      if (index - 1 >= 0) flowerbed[index - 1] = 2;
    }
  });

  const maxFlowers = flowerbed.reduce((pre, elem, index) => {
    if (elem === 0) {
      flowerbed[index + 1] = 3;
      flowerbed[index - 1] = 3;
      pre++;
    }
    return pre;
  }, 0);

  return n <= maxFlowers;
};
// @lc code=end
