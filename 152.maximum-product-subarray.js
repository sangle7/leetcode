/*
 * @lc app=leetcode id=152 lang=javascript
 *
 * [152] Maximum Product Subarray
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {
  /*  思考：
    如果没有负数，subarr数字越多越好
    如果有负数，一定要有偶数个，其次subarr数字越多越好
    如果有0，先拆成几个小数组再算！
  */
  if (nums.length === 1) {
    return nums[0];
  }

  let prevZeroIndex = 0;
  let subArrays = [];

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      subArrays.push(nums.slice(prevZeroIndex, i));
      prevZeroIndex = i + 1;
    }
  }

  subArrays.push(nums.slice(prevZeroIndex));

  const productArrays = [];

  for (let arr of subArrays) {
    //分别计算每个数组的
    if (arr.length) {
      const productOfArray = calculateProduct(arr);
      productArrays.push(productOfArray);
    }
  }

  if (prevZeroIndex) {
    productArrays.push(0);
  }

  return Math.max(...productArrays);
};

function calculateProduct(arr) {
  if (arr.length === 1) {
    return arr[0];
  }
  const prod = quickProd(arr);
  if (prod > 0) {
    return prod;
  }

  // 小于0的话，删掉最边上的一个！
  const minusZeroIndex = [];
  let i = 0;
  while (i < arr.length) {
    if (arr[i] < 0) {
      minusZeroIndex.push(i);
    }
    i++;
  }
  const firstIndex = minusZeroIndex[0];
  const lastIndex = minusZeroIndex.pop();

  const prod1 = quickProd(arr.slice(0, firstIndex + 1));
  const prod2 = quickProd(arr.slice(lastIndex));

  return Math.max(prod / prod1, prod / prod2);
}

function quickProd(arr) {
  return arr.reduce((pre, elem) => {
    pre *= elem;
    return pre;
  }, 1);
}
// @lc code=end
