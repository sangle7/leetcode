// @lc code=start

var topKFrequent = function (arr, n) {
  const array = [];
  const countObj = {};
  for (let i = 0; i < arr.length; i++) {
    countObj[arr[i]] = countObj[arr[i]] || 0;
    countObj[arr[i]]++;
  }
  //{1:3,2:2,3:1}

  for (let key in countObj) {
    array[countObj[key]] = Number(key);
  }

  return array
    .filter((e) => e)
    .reverse()
    .slice(0, n);
};
// @lc code=end
