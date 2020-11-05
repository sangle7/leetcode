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

  let findOne = false;

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < columns; j++) {
      if (board[i][j] === word[0]) {
        const key = `${i}-${j}`;
        serachForNext(i, j, 1, { [key]: true });
      }
    }
  }

  return findOne;

  function serachForNext(i, j, wordIndex, goneObj) {
    if (!findOne) {
      // console.error(t, wordIndex);
      if (wordIndex === word.length) {
        findOne = true;
      }
      if (
        i < rows - 1 &&
        board[i + 1][j] === word[wordIndex] &&
        !goneObj[`${i + 1}-${j}`]
      ) {
        const key = `${i + 1}-${j}`;
        serachForNext(i + 1, j, wordIndex + 1, { ...goneObj, [key]: true });
      }
      if (
        i > 0 &&
        board[i - 1][j] === word[wordIndex] &&
        !goneObj[`${i - 1}-${j}`]
      ) {
        const key = `${i - 1}-${j}`;
        serachForNext(i - 1, j, wordIndex + 1, { ...goneObj, [key]: true });
      }
      if (
        j > 0 &&
        board[i][j - 1] === word[wordIndex] &&
        !goneObj[`${i}-${j - 1}`]
      ) {
        const key = `${i}-${j - 1}`;
        serachForNext(i, j - 1, wordIndex + 1, { ...goneObj, [key]: true });
      }
      if (
        j < columns - 1 &&
        board[i][j + 1] === word[wordIndex] &&
        !goneObj[`${i}-${j + 1}`]
      ) {
        const key = `${i}-${j + 1}`;
        serachForNext(i, j + 1, wordIndex + 1, { ...goneObj, [key]: true });
      }
    }
  }
};

// @lc code=end
