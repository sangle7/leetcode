/*
 * @lc app=leetcode id=126 lang=javascript
 *
 * [126] Word Ladder II
 */

// @lc code=start
/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {string[][]}
 */
var findLadders = function (beginWord, endWord, wordList) {
  let solutions = [];
  let length = Infinity;

  if (wordList.indexOf(endWord) === -1) {
    return solutions;
  }

  if (wordList.indexOf(beginWord) === -1) {
    wordList.push(beginWord);
  }
  //buildMap
  const linkMap = {};
  for (let elem1 of wordList) {
    for (let elem2 of wordList) {
      if (oneLetterDiff(elem1, elem2)) {
        linkMap[elem1] = linkMap[elem1] || [];
        linkMap[elem1].push(elem2);
      }
    }
  }

  // console.error(linkMap);
  //{1:[2,3],2:[1],3:[1]}
  const subFunc = (from, arr) => {
    // console.error(from, arr);
    if (arr.length > length || !linkMap[from]) {
      return;
    }
    if (from === beginWord) {
      if (arr.length < length) {
        solutions = [];
      }
      solutions.push([from, ...arr]);
      // console.error(arr.length);
      length = arr.length;
      return;
    } else {
      for (let elem of linkMap[from]) {
        if (arr.indexOf(elem) === -1) {
          subFunc(elem, [from, ...arr]);
        }
      }
    }
  };

  subFunc(endWord, []);

  return solutions;
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
