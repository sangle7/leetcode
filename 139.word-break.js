/*
 * @lc app=leetcode id=139 lang=javascript
 *
 * [139] Word Break
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function (s, wordDict) {
  const resArr = new Array(s.length);
  let status = false;
  const subFunc = (str, preIndex) => {
    if (!str) {
      status = true;
      return;
    }
    for (let i = 0; i < wordDict.length; i++) {
      if (str.indexOf(wordDict[i]) === 0) {
        const len = wordDict[i].length;
        const index = preIndex + len;
        if (!resArr[index]) {
          // 同一个位置只算一次
          resArr[index] = true;
          subFunc(str.substr(len), index);
        }
      }
    }
    return;
  };

  subFunc(s, 0);

  return status;
};
// @lc code=end
