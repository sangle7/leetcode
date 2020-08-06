/*
 * @lc app=leetcode id=205 lang=javascript
 *
 * [205] Isomorphic Strings
 */
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
  if (s.length !== t.length) {
    return false;
  }
  const arr1 = s.split('');
  const arr2 = t.split('');

  /*{
    e:+0
    g:+1+2
  } */
  const map1 = arr1.reduce((pre, e, index) => {
    pre[e] = pre[e] || '';
    pre[e] = `${pre[e]}+${index}`;
    return pre;
  }, {});

  const map2 = arr2.reduce((pre, e, index) => {
    pre[e] = pre[e] || '';
    pre[e] = `${pre[e]}+${index}`;
    return pre;
  }, {});

  const values1 = Object.values(map1);
  const values2 = Object.values(map2);

  debugger;

  return values1.sort().join(',') === values2.sort().join(',');
};
