/*
 * @lc app=leetcode id=127 lang=javascript
 *
 * [127] Word Ladder
 */

// @lc code=start
/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
var ladderLength = function (beginWord, endWord, wordList) {
  if (wordList.indexOf(endWord) === -1) {
    return 0;
  }
  let output = 0;

  const subFunc = (arr, count) => {
    if (arr.indexOf(endWord) > -1) {
      output = count;
      return;
    }
    if (count <= wordList.length) {
      let newObj = {};
      for (let i = 0; i < arr.length; i++) {
        for (let elem of wordList) {
          // if (!newObj[elem]) {
            if (oneLetterDiff(elem, arr[i])) {
              newObj[elem] = true;
            }
          // }
        }
      }
      subFunc(Object.keys(newObj), count + 1);
    }
  };

  subFunc([beginWord], 1);

  return output;
};

function oneLetterDiff(s1, s2) {
  let count = 0;
  for (let i = 0; i < s1.length; i++) {
    if (s1[i] !== s2[i]) {
      count++;
    }
  }
  return count === 1;
}
// @lc code=end
