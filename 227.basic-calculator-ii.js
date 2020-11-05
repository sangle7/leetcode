/*
 * @lc app=leetcode id=227 lang=javascript
 *
 * [227] Basic Calculator II
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var calculate = function (s) {
  const operators = ['+', '-', '*', '/'];
  const simpleOperators = ['+', '-'];
  const complexOperators = ['*', '/'];
  const stack = []; //存放栈

  const array = [];
  let start = -1;
  let end = 0;
  while (end < s.length) {
    if (operators.indexOf(s[end]) !== -1) {
      array.push(parseInt(s.substring(start + 1, end)));
      array.push(s[end]);
      start = end;
    }
    end++;
  }
  array.push(parseInt(s.substring(start + 1)));

  let i = 0;
  while (i < array.length) {
    // 数字直接入栈
    if (operators.indexOf(array[i]) === -1) {
      stack.push(array[i]);
      i++;
    } else if (simpleOperators.indexOf(array[i]) > -1) {
      // 简单符号也直接入栈
      stack.push(array[i]);
      i++;
    } else {
      // 复杂符号
      const pre = stack.pop();
      const res = calculateSimple(pre, array[i + 1], array[i]);
      stack.push(res);
      i += 2;
    }
  }

  // console.error(stack);
  // [3, "+", 2, "-", 4]

  //最后按顺序执行stack
  const tmp = [];
  i = 0;
  while (i < stack.length) {
    if (operators.indexOf(stack[i]) === -1) {
      tmp.push(stack[i]);
      i += 1;
    } else {
      const pre = tmp.pop();
      const res = calculateSimple(pre, stack[i + 1], stack[i]);
      tmp.push(res);
      i += 2;
    }
  }

  return tmp[0];
};

function calculateSimple(num1, num2, operator) {
  switch (operator) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    case '/':
      return Math.trunc(num1 / num2);
  }
}
// @lc code=end
