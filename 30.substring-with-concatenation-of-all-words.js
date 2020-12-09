/*
 * @lc app=leetcode id=30 lang=javascript
 *
 * [30] Substring with Concatenation of All Words
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
var findSubstring = function (s, words) {
  const wordHashMap = words.reduce((pre, elem) => {
    pre[elem] = pre[elem] || 0;
    pre[elem]++;
    return pre;
  }, {});

  const wordLength = words[0].length;
  const substrLength = wordLength * words.length;

  const resultArr = [];

  let i = 0;
  while (i <= s.length - substrLength) {
    let j = i;
    const copyMap = { ...wordHashMap };
    while (j <= s.length - wordLength) {
      // console.error(i,j);
      let tempWord = s.substr(j, wordLength);
      if (copyMap[tempWord]) {
        copyMap[tempWord]--;
        if (!copyMap[tempWord]) {
          delete copyMap[tempWord];
        }
        if (Object.keys(copyMap).length === 0) {
          resultArr.push(i);
        }
      } else {
        break;
      }
      j += wordLength;
    }
    i++;
  }

  return resultArr;
};
// @lc code=end
