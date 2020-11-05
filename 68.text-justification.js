/*
 * @lc app=leetcode id=68 lang=javascript
 *
 * [68] Text Justification
 */

// @lc code=start
/**
 * @param {string[]} words
 * @param {number} maxWidth
 * @return {string[]}
 */
var fullJustify = function (words, maxWidth) {
  const solutions = [];
  let temp = [];
  let tempLength = 0;
  let i = 0;
  while (i < words.length) {
    if (tempLength + temp.length + words[i].length <= maxWidth) {
      tempLength = tempLength + words[i].length;
      temp.push(words[i]);
    } else {
      solutions.push(justifyALine(temp, tempLength, maxWidth));
      temp = [words[i]];
      tempLength = words[i].length;
    }
    i++;
  }
  // 最后一行，全部靠左
  solutions.push(justifyALine(temp, tempLength, maxWidth, true));
  return solutions;
};

function justifyALine(words, length, maxWidth, last = false) {
  let count = words.length;

  if (last) {
    const firstWord = words.shift();
    const l = words.reduce((pre, elem, index) => {
      return pre + ' ' + elem;
    }, firstWord);
    const spaceLength = maxWidth - l.length;
    const spaces = ' '.repeat(spaceLength);
    return l + spaces;
  }

  if (count === 1) {
    const spaceLength = maxWidth - length;
    const spaces = ' '.repeat(spaceLength);
    return words[0] + spaces;
  }
  const spaceLength = Math.floor((maxWidth - length) / (count - 1));
  const divied = (maxWidth - length) % (count - 1);
  const spaces = ' '.repeat(spaceLength);

  // console.log(spaceLength, divied)

  const firstWord = words.shift();

  return words.reduce((pre, elem, index) => {
    return pre + spaces + (index < divied ? ' ' : '') + elem;
  }, firstWord);
}
// @lc code=end
