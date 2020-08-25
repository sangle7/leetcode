/*
 * @lc app=leetcode id=22 lang=javascript
 *
 * [22] Generate Parentheses
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
  const arr = [];

  subFunc([], '', true);

  function subFunc(stack, str, bool) {
    if (str.length > 2 * n) {
      return;
    }
    if (bool) {
      stack.push(1);
      str += '(';
      subFunc([...stack], str, false);
      if (countLeft(str) < n) {
        subFunc([...stack], str, true);
      }
    } else {
      stack.pop();
      str += ')';
      // 左括号不足，推左
      if (countLeft(str) < n) {
        subFunc([...stack], str, true);
      }
      // 如果栈里还有东西，可以推右括号
      if (stack.length) {
        subFunc([...stack], str, false);
      }
    }

    if (str.length === 2 * n) {
      arr.push(str);
      return;
    }
  }

  function countLeft(str) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
      if (str[i] === '(') {
        count++;
      }
    }
    return count;
  }
  return arr;
};
// @lc code=end
