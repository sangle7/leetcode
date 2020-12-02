/*
 * @lc app=leetcode id=383 lang=javascript
 *
 * [383] Ransom Note
 */

// @lc code=start
/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
  let ransomNotes = magazine;
  for (let item of ransomNote) {
    let i = 0;
    let isMatch = false;
    while (i < ransomNotes.length) {
      if (ransomNotes[i] === item) {
        isMatch = true;
        ransomNotes =
          ransomNotes.substring(0, i) + ransomNotes.substring(i + 1);
        break;
      }
      i++;
    }
    if (!isMatch) {
      return false;
    }
  }

  return true;
};
// @lc code=end
