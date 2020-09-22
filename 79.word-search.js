/*
 * @lc app=leetcode id=79 lang=javascript
 *
 * [79] Word Search
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
  const rows = board.length;
  const columns = board[0].length;

  if (word.length > rows * columns) {
    return false;
  }

  const hasGone = {};

  let findOne = false;

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < columns; j++) {
      if (board[i][j] === word[0]) {
        const key = `${i}-${j}`;
        hasGone[key] = [key];
        serachForNext(key);
      }
    }
  }

  return findOne;

  function serachForNext(t, wordIndex) {
    if (wordIndex === word.length) {
      findOne = true;
    }
    const [i, j] = t.split('-').map((e) => parseInt(e));
    if (i < rows - 1 && board[i + 1][j] === word[wordIndex]) {
      const key = `${i + 1}-${j}`;
      serachForNext(key, wordIndex + 1);
    }
    if (i > 0 && board[i - 1][j] === word[wordIndex]) {
      const key = `${i - 1}-${j}`;
      serachForNext(key, wordIndex + 1);
    }
    if (j > 0 && board[i][j - 1] === word[wordIndex]) {
      const key = `${i}-${j - 1}`;
      serachForNext(key, wordIndex + 1);
    }
    if (j < columns - 1 && board[i][j + 1] === word[wordIndex]) {
      const key = `${i}-${j + 1}`;
      serachForNext(key, wordIndex + 1);
    }
  }
};

// @lc code=end
