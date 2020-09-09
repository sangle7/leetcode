/*
 * @lc app=leetcode id=47 lang=javascript
 *
 * [47] Permutations II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function (nums) {
  const solutions = [];
  let sortedNums = nums.sort((a, b) => a - b);
  const subfunc = (arr, temp) => {
    if (arr.length === 0) {
      solutions.push(temp);
    }
    let i = 0;
    while (i < arr.length) {
      let newarr = arr.slice(0, i).concat(arr.slice(i + 1));
      subfunc(newarr, temp.concat(arr[i]));
      let j = i + 1;
      while (arr[i] === arr[j]) {
        j++;
      }
      i = j;
    }
  };
  subfunc(sortedNums, []);
  return solutions;
};
// @lc code=end
