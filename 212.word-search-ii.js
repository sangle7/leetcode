/*
 * @lc app=leetcode id=212 lang=javascript
 *
 * [212] Word Search II
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @param {string[]} words
 * @return {string[]}
 */
class TrieNode {
  constructor() {
    this.word = null;
    this.children = {};
  }
}

function buildTrie(words) {
  var root = new TrieNode();

  for (var i = 0; i < words.length; i++) {
    var word = words[i];
    var node = root;

    for (var j = 0; j < word.length; j++) {
      var ch = word[j];

      node.children[ch] = node.children[ch] || new TrieNode();
      node = node.children[ch];
    }

    node.word = word;
  }

  return root;
}

var findWords = function (board, words) {
  var root = buildTrie(words);
  var result = [];

  for (var i = 0; i < board.length; i++) {
    for (var j = 0; j < board[0].length; j++) {
      searchWord(result, root, board, i, j);
    }
  }

  return result;
};

function searchWord(result, root, board, i, j) {
  if (root.word) {
    result.push(root.word);
    root.word = null;
  }

  if (i < 0 || i >= board.length || j < 0 || j >= board[0].length) {
    return;
  }

  if (board[i][j] === '#' || !root.children[board[i][j]]) {
    return;
  }

  var ch = board[i][j];
  board[i][j] = '#';

  searchWord(result, root.children[ch], board, i + 1, j);
  searchWord(result, root.children[ch], board, i - 1, j);
  searchWord(result, root.children[ch], board, i, j + 1);
  searchWord(result, root.children[ch], board, i, j - 1);

  board[i][j] = ch;
}

// @lc code=end
