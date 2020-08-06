/*
 * @lc app=leetcode id=12 lang=javascript
 *
 * [12] Integer to Roman
 */

// @lc code=start
/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function (num) {
  let tmp = num;
  let thousands = 0,
    thousandsStr = '',
    hundreds = 0,
    hundredsStr = '',
    tens = 0,
    tensStr = '',
    ones = 0,
    onesStr = '';
  if (tmp >= 1000) {
    thousands = Math.floor(tmp / 1000);
    tmp = tmp % 1000;
    thousandsStr = 'M'.repeat(thousands);
  }
  if (tmp >= 100) {
    hundreds = Math.floor(tmp / 100); // 1-9
    tmp = tmp % 100;
    if (hundreds === 9) {
      hundredsStr = 'CM';
    } else if (hundreds >= 5) {
      hundredsStr = 'D' + 'C'.repeat(hundreds - 5);
    } else if (hundreds === 4) {
      hundredsStr = 'CD';
    } else {
      hundredsStr = 'C'.repeat(hundreds);
    }
  }
  if (tmp >= 10) {
    tens = Math.floor(tmp / 10);
    tmp = tmp % 10;
    if (tens === 9) {
      tensStr = 'XC';
    } else if (tens >= 5) {
      tensStr = 'L' + 'X'.repeat(tens - 5);
    } else if (tens === 4) {
      tensStr = 'XL';
    } else {
      tensStr = 'X'.repeat(tens);
    }
  }
  ones = tmp;
  if (ones === 9) {
    onesStr = 'IX';
  } else if (ones >= 5) {
    onesStr = 'V' + 'I'.repeat(ones - 5);
  } else if (ones === 4) {
    onesStr = 'IV';
  } else {
    onesStr = 'I'.repeat(ones);
  }
  return thousandsStr + hundredsStr + tensStr + onesStr;
};

// @lc code=end
