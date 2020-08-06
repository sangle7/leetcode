/*
 * @lc app=leetcode id=299 lang=javascript
 *
 * [299] Bulls and Cows
 */
/**
 * @param {string} secret
 * @param {string} guess
 * @return {string}
 */
var getHint = function(secret, guess) {
  const arr1 = secret.split('');
  const arr2 = guess.split('');
  const arr3 = [...arr2];
  const length = arr1.length;
  let a = 0;
  let b = 0;

  for (let i = 0; i < length; i++) {
    if (arr1[i] === arr2[i]) {
      a++;
    }
    const index = arr3.indexOf(arr1[i]);
    if (index > -1) {
      b++;
      arr3.splice(index, 1);
    }
  }
  return `${a}A${b - a}B`;
};
