/*
 * @lc app=leetcode id=171 lang=javascript
 *
 * [171] Excel Sheet Column Number
 *
 * https://leetcode.com/problems/excel-sheet-column-number/description/
 *
 * algorithms
 * Easy (50.86%)
 * Total Accepted:    207.9K
 * Total Submissions: 408.6K
 * Testcase Example:  '"A"'
 *
 * Given a column title as appear in an Excel sheet, return its corresponding
 * column number.
 *
 * For example:
 *
 *
 * ⁠   A -> 1
 * ⁠   B -> 2
 * ⁠   C -> 3
 * ⁠   ...
 * ⁠   Z -> 26
 * ⁠   AA -> 27
 * ⁠   AB -> 28
 * ⁠   ...
 *
 *
 * Example 1:
 *
 *
 * Input: "A"
 * Output: 1
 *
 *
 * Example 2:
 *
 *
 * Input: "AB"
 * Output: 28
 *
 *
 * Example 3:
 *
 *
 * Input: "ZY"
 * Output: 701
 *
 */
/**
 * @param {string} s
 * @return {number}
 */
var alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var titleToNumber = function(s) {
  let num = 0;
  for (i = 0, j = s.length - 1; i < s.length; i += 1, j -= 1) {
    num += Math.pow(alphabet.length, j) * (alphabet.indexOf(s[i]) + 1);
  }
  return num;
};
