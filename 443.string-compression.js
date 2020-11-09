/*
 * @lc app=leetcode id=443 lang=javascript
 *
 * [443] String Compression
 */

// @lc code=start
/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function (chars) {
  let str = '';
  let letter = '';
  let count = 1;

  let i = 0;
  while (i < chars.length) {
    if (chars[i] === letter) {
      count++;
    } else {
      if (letter) {
        str += `${letter}${count > 1 ? count : ''}`;
      }
      letter = chars[i];
      count = 1;
    }
    i++;
  }
  str += `${letter}${count > 1 ? count : ''}`;
  const arr = str.split('');
  for (let i = 0; i < str.length; i++) {
    chars[i] = arr[i];
  }
  chars.splice(str.length, 100);
  return str.length;
};
// @lc code=end
