/*
 * @lc app=leetcode id=419 lang=javascript
 *
 * [419] Battleships in a Board
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @return {number}
 */
// 思路：一个X的左边或者上面如果没有X，则船数+1；
var countBattleships = function (board) {
  var count = 0;
  for (var i = 0; i < board.length; i++) {
    for (var j = 0; j < board[i].length; j++) {
      if (i > 0 && j > 0) {
        if (
          board[i - 1][j] === '.' &&
          board[i][j - 1] === '.' &&
          board[i][j] === 'X'
        ) {
          count++;
        }
      } else if (i > 0 && j === 0) {
        if (board[i - 1][j] === '.' && board[i][j] === 'X') {
          count++;
        }
      } else if (j > 0 && i === 0) {
        if (board[i][j - 1] === '.' && board[i][j] === 'X') {
          count++;
        }
      } else {
        //(i===0&&j===0)===true
        if (board[i][j] === 'X') {
          count++;
        }
      }
    }
  }
  return count;
};
// @lc code=end
