/*
 * @lc app=leetcode id=71 lang=javascript
 *
 * [71] Simplify Path
 */

// @lc code=start
/**
 * @param {string} path
 * @return {string}
 */
/*
遇到正常的字母时，推入 stack 中
遇到 .. 时，stack 弹出最近一个路径
遇到 . 或者为空时，不修改当前 stack。
最后返回 '/' + stack.join('/') 为新的路径
*/
var simplifyPath = function (path) {
  const stack = [];
  const pathArr = path.split('/');

  for (let item of pathArr) {
    if (item === '' || item === '.') {
      continue;
    } else if (item === '..') {
      stack.pop();
    } else {
      stack.push(item);
    }
  }

  return '/' + stack.join('/');
};
// @lc code=end
