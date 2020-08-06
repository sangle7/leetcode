/*
 * @lc app=leetcode id=204 lang=javascript
 *
 * [204] Count Primes
 *
 * https://leetcode.com/problems/count-primes/description/
 *
 * algorithms
 * Easy (28.26%)
 * Total Accepted:    214.8K
 * Total Submissions: 760K
 * Testcase Example:  '10'
 *
 * Count the number of prime numbers less than a non-negative number, n.
 *
 * Example:
 *
 *
 * Input: 10
 * Output: 4
 * Explanation: There are 4 prime numbers less than 10, they are 2, 3, 5, 7.
 *
 */
/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function(n) {
  let count = 0;
  for (let i = 2; i < n; i++) {
    if (isPrimeNum(i)) {
      count++;
    }
  }
  return count;
};

function isPrimeNum (n) {
  var result = true;
  
  if (n <= 1) {
      result = false;
  }
  else {
      // We only need to check up to the sqrt of the number.
      for (var i=2; i*i<=n; i++) {
          if (n % i === 0) {
              // This number is evenly divisible by i, so it is not prime.
              result = false;
              break;
          }
      }
  }
  
  return result;
}
