/*
 * @lc app=leetcode id=198 lang=javascript
 *
 * [198] House Robber
 *
 * https://leetcode.com/problems/house-robber/description/
 *
 * algorithms
 * Easy (40.78%)
 * Total Accepted:    291.5K
 * Total Submissions: 714.7K
 * Testcase Example:  '[1,2,3,1]'
 *
 * You are a professional robber planning to rob houses along a street. Each
 * house has a certain amount of money stashed, the only constraint stopping
 * you from robbing each of them is that adjacent houses have security system
 * connected and it will automatically contact the police if two adjacent
 * houses were broken into on the same night.
 *
 * Given a list of non-negative integers representing the amount of money of
 * each house, determine the maximum amount of money you can rob tonight
 * without alerting the police.
 *
 * Example 1:
 *
 *
 * Input: [1,2,3,1]
 * Output: 4
 * Explanation: Rob house 1 (money = 1) and then rob house 3 (money =
 * 3).
 * Total amount you can rob = 1 + 3 = 4.
 *
 * Example 2:
 *
 *
 * Input: [2,7,9,3,1]
 * Output: 12
 * Explanation: Rob house 1 (money = 2), rob house 3 (money = 9) and rob house
 * 5 (money = 1).
 * Total amount you can rob = 2 + 9 + 1 = 12.
 *
 *
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
  // 只有从1或者从2开始两种情况
  // 1->3 1->4
  // 1->3->5 1->3->6
  // 2->5 2->4
  const len = nums.length;
  if (len === 0) {
    return 0;
  }
  if (len === 1) {
    return nums[0];
  }
  let max = 0;
  let pre = 0;
  //偷前n个房子的最优解等于：偷前(n-1)个房子的最优解、偷前(n-2)个房子的最优解 + 第n个房子的钱，取这两者中较大的那个。
  for (var i = 0; i < len; i++) {
    var temp = max; //max是n-1的值
    max = Math.max(max, pre + nums[i]);
    pre = temp; // n-2 的值
  }
  return max;
};
