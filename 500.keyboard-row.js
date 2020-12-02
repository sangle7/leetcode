/*
 * @lc app=leetcode id=500 lang=javascript
 *
 * [500] Keyboard Row
 */

// @lc code=start
/**
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function(words) {
  const map = new Map([
    ['q',1],['w',1],['e',1],['r',1],['t',1],['y',1],['u',1],['i',1],['o',1],['p',1],
    ['a',2],['s',2],['d',2],['f',2],['g',2],['h',2],['j',2],['k',2],['l',2],
    ['z',3],['x',3],['c',3],['v',3],['b',3],['n',3],['m',3]
  ]), ans = []
  for (const word of words) {
      const target = map.get(word[0].toLowerCase())
      const canBeAdded = word.split('').every((item) => {
          return map.get(item.toLowerCase()) === target
      })
      if (canBeAdded) {
          ans.push(word)
      }
  }
  return ans
};
// @lc code=end

