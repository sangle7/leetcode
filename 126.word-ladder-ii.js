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

  if (wordList.indexOf(endWord) === -1) {
    return solutions;
  }

  if (wordList.indexOf(beginWord) === -1) {
    wordList.push(beginWord);
  }

  const linkMap = {};
  for (let elem1 of wordList) {
    for (let elem2 of wordList) {
      if (oneLetterDiff(elem1, elem2)) {
        linkMap[elem1] = linkMap[elem1] || [];
        linkMap[elem1].push(elem2);
      }
    }
  }

  const bfs = (map) => {
    if (map[beginWord]) {
      return handle({ [beginWord]: map[beginWord] });
    } else {
      let newMap = {};
      for (let key in map) {
        try {
          for (let elem of linkMap[key]) {
            newMap[elem] = newMap[elem] || {};
            newMap[elem][key] = map[key];
          }
        } catch (error) {
          return [];
        }
      }
      return bfs(newMap);
    }
  };

  return bfs({ [endWord]: {} });
};

function handle(obj) {
  const result = [];
  const subFunc = (o, arr) => {
    if (Object.keys(o).length === 0) {
      result.push(arr);
    }
    for (let key in o) {
      subFunc(o[key], [...arr, key]);
    }
  };
  subFunc(obj, []);
  return result;
}

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
