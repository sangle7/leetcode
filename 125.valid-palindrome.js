/*
 * @lc app=leetcode id=125 lang=javascript
 *
 * [125] Valid Palindrome
 *
 * https://leetcode.com/problems/valid-palindrome/description/
 *
 * algorithms
 * Easy (30.24%)
 * Total Accepted:    323.4K
 * Total Submissions: 1.1M
 * Testcase Example:  '"A man, a plan, a canal: Panama"'
 *
 * Given a string, determine if it is a palindrome, considering only
 * alphanumeric characters and ignoring cases.
 *
 * Note: For the purpose of this problem, we define empty string as valid
 * palindrome.
 *
 * Example 1:
 *
 *
 * Input: "A man, a plan, a canal: Panama"
 * Output: true
 *
 *
 * Example 2:
 *
 *
 * Input: "race a car"
 * Output: false
 *
 *
 */
/**
 * @param {string} s
 * @return {boolean}
 */
const alphabets = "1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
var isPalindrome = function(s) {
  const arr = s.split("").filter(e => alphabets.indexOf(e) > -1);
  const str = arr.join("").toLocaleLowerCase();
  const str2 = arr
    .reverse()
    .join("")
    .toLocaleLowerCase();
  return str === str2;
};
