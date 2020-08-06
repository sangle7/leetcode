/*
 * @lc app=leetcode id=43 lang=javascript
 *
 * [43] Multiply Strings
 */

// @lc code=start
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function (num1, num2) {
  const arr = num2.split('');
  const len = arr.length;
  // len -1 ;len -2 -> +1 len -3 -> +2 len-len=0 -> +len-1
  const res = arr.reduce((pre, ele, index) => {
    const zeros = new Array(len - 1 - index).fill('0').join('');
    return bigAdd(pre, multiplySingle(num1, Number(ele)) + zeros);
  }, '0');

  return cutZero(res);
};

function multiplySingle(str, singleNum) {
  let tmp = 0;
  const res = [];
  for (let i = str.length - 1; i >= 0; i--) {
    res[i] = tmp + singleNum * Number(str[i]);
    tmp = Math.floor(res[i] / 10);
    res[i] = res[i] % 10;
  }
  if (tmp) {
    res.unshift(tmp);
  }
  return res.join('');
}

function bigAdd(str1, str2) {
  const len1 = str1.length;
  const len2 = str2.length;
  const arr1 = str1.split('').reverse();
  const arr2 = str2.split('').reverse();
  const length = Math.max(len1, len2);
  const res = [];

  let tmp = 0;

  for (let i = 0; i < length; i++) {
    res[i] = tmp + Number(arr1[i] || 0) + Number(arr2[i] || 0);
    tmp = res[i] >= 10 ? 1 : 0;
    res[i] = res[i] % 10;
  }

  if (tmp) {
    res.push(1);
  }
  return res.reverse().join('');
}

function cutZero(str) {
  let i = 0;
  while (str[i] === '0') {
    i++;
  }
  return str.substr(i) || '0'
}
// @lc code=end
