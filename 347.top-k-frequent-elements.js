// @lc code=start

var topKFrequent = function(nums, k) {
  const result = nums.reduce((pre,elem)=>{
      pre[elem] = pre[elem] || 0
      pre[elem] +=1
      return pre
  },{})
  const array = Object.entries(result).sort((a,b)=>b[1]-a[1]).map(e=>e[0])
  return array.slice(0,k)
  
};
// @lc code=end
