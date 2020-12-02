/*
 * @lc app=leetcode id=463 lang=javascript
 *
 * [463] Island Perimeter
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function(grid) {
  var res = 0,
      m = grid.length,
      n = grid[0].length;
      
  for(var i = 0; i < m; i++){
      for(var j = 0; j < n; j++){
          if(grid[i][j] == 1){
              var count = 0; 
              
              if(i+1 < m && grid[i+1][j] == 1)count++;
              
              if(i-1 >= 0 && grid[i-1][j] == 1)count++;
              
              if(j+1 < n && grid[i][j+1] == 1)count++;
              
              if(j-1 >= 0 && grid[i][j-1] == 1)count++;
              
              res += 4 - count;
          }
      }
  }
  return res
};

// @lc code=end

