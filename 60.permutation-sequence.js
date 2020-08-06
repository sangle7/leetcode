/*
 * @lc app=leetcode id=60 lang=javascript
 *
 * [60] Permutation Sequence
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
var getPermutation = function (n, k) {
  const nums = Array.from({ length: n }, (v, k) => k + 1); //[1,2,3,4,5,6,7,8,9]
  const factorialRecursions = []; //[1, 2, 6, 24, 120, 720, 5040, 40320, 362880]
  for (let i = 0; i < n; i++) {
    if (factorialRecursions[i - 1]) {
      factorialRecursions[i] = (i + 1) * factorialRecursions[i - 1];
    }
    if (i === 0) {
      factorialRecursions[0] = 1;
    }
  }
  return subPermutation(nums, k);
  function subPermutation(arr, index) {
    if (arr.length === 1) {
      return String(arr[0]);
    }
    const len = arr.length;
    const count = factorialRecursions[len - 2];
    let offset = index % count; //偏移量
    if (!offset) {
      offset = count;
    }
    let numIndex = Math.floor((index - offset) / count); //第一位数
    
    const firstNum = arr[numIndex];
    arr.splice(numIndex, 1);

    return String(firstNum) + subPermutation(arr, offset);
  }
};

// @lc code=end
