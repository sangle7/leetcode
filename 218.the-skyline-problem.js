/*
 * @lc app=leetcode id=218 lang=javascript
 *
 * [218] The Skyline Problem
 */

// @lc code=start
/**
 * @param {number[][]} buildings
 * @return {number[][]}
 */
/*
 将每条建筑的横线段分解成左上右上两个顶点，将所有这些点按横坐标大小升序排列
从左至右遍历这些点，每遍历到一个左顶点，将此点代表的建筑高度放入大顶堆height中
每次到一个左顶点，先比较此顶点高度与当前基准高度，如果高于基准高度，那么就是一个轮廓点。这是最关键的地方，结合图形理解，如果当前建筑的左顶点要作比较，肯定是与它前面有重叠的建筑比较，而前面重叠的建筑高度，要取之前最高的、横线还在延续的建筑比较，因此需要用到一个大顶堆维护当前高度
还有两个细节：
1. 将右顶点的高度设为负值，在遍历点时用以区分左右顶点
2. 碰到左顶点将高度加入大顶堆，碰到右顶点时，说明此建筑横向的延绵结束了，那么要从大顶堆中删掉此高度
 */
var getSkyline = function (buildings) {
  var res = [],
    height = [],
    pq = [0],
    prevMax = null;
  for (var b of buildings) {
    height.push([b[0], -b[2]]);
    height.push([b[1], b[2]]);
  }
  height.sort((a, b) => {
    if (a[0] === b[0]) return a[1] - b[1];
    return a[0] - b[0];
  });

  for (var h of height) {
    if (h[1] < 0) {
      pq.push(-h[1]);
    } else {
      remove(pq, h[1]);
    }

    var maxV = Math.max(...pq);
    if (prevMax !== maxV) {
      // maxV changed after remove h[1]
      res.push([h[0], maxV]);
      prevMax = maxV;
    }
  }
  return res;
};

var remove = function (arr, val) {
  // remove the first element equal to val
  var ind = -1;
  for (var i = 0; i < arr.length; i++) {
    if (val === arr[i]) {
      ind = i;
      break;
    }
  }
  arr.splice(ind, 1);
  return;
};
// @lc code=end
