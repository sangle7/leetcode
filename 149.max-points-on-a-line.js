/*
 * @lc app=leetcode id=149 lang=javascript
 *
 * [149] Max Points on a Line
 */

// @lc code=start
/**
 * @param {number[][]} points
 * @return {number}
 */
var maxPoints = (points) => {
    
  if (points.length === 0 || points.length === 1) {
      return points.length;
  }
  
  let uniquePoints = new Map();
  points.filter(point => {
      let x = point[0];
      let y = point[1];
      
      let xx = x >= 0 ? x * 2 : x * -2 - 1;
      let yy = y >= 0 ? y * 2 : y * -2 - 1;
      let szudzik = (xx >= yy) ? (xx * xx + xx + yy) : (yy * yy + xx);
      
      if (uniquePoints.has(szudzik)) {
          uniquePoints.get(szudzik).count++;
          return false;
      }
      uniquePoints.set(szudzik, {x: x, y: y, count: 1});
      return true;
  });
  
  if (uniquePoints.size === 1) {
      return points.length;
  }
  
  uniquePoints = Array.from(uniquePoints.values());
  let highestPointCount = 0;
  
  for (let i = 0; i < uniquePoints.length - 1; i++) {
      for (let j = i + 1; j < uniquePoints.length; j++) {
          
          let n = uniquePoints[j].y - uniquePoints[i].y; // y_2 - y_1
          let d = uniquePoints[j].x - uniquePoints[i].x; // x_2 - x_1;
          
          let pointCount = uniquePoints[i].count + uniquePoints[j].count;
          for (let k = j + 1; k < uniquePoints.length; k++) {
              if (d === 0 && uniquePoints[j].x === uniquePoints[k].x) {
                  pointCount+= uniquePoints[k].count;
              } else if (d*(uniquePoints[k].y - uniquePoints[j].y) ===
                         n*(uniquePoints[k].x - uniquePoints[j].x)) {
                  pointCount+= uniquePoints[k].count;
              }
          }
          
          highestPointCount = 
              pointCount > highestPointCount ? pointCount : highestPointCount;
      }
  }
  
  return highestPointCount;
};
// @lc code=end
