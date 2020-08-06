/*
 * @lc app=leetcode id=290 lang=javascript
 *
 * [290] Word Pattern
 */
/**
 * @param {string} pattern
 * @param {string} str
 * @return {boolean}
 */
var wordPattern = function(pattern, str) {
  const arr1 = pattern.split('');
  const arr2 = str.split(' ');

  if (arr1.length !== arr2.length) {
    return false;
  }
  var obj = {};
  for (let i = 0; i < arr1.length; i++) {
    if (obj[arr1[i]]) {
      if (obj[arr1[i]] !== arr2[i]) {
        return false;
      }
    } else {
      obj[arr1[i]] = arr2[i];
    }
  }
  const arr = Object.values(obj);
  return new Set(arr).size === arr.length;
};
