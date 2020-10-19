/*
 * @lc app=leetcode id=841 lang=javascript
 *
 * [841] Keys and Rooms
 */

// @lc code=start
/**
 * @param {number[][]} rooms
 * @return {boolean}
 */
var canVisitAllRooms = function (rooms) {
  const visited = {
    0: true,
  };

  const subFunc = (arr) => {
    if (!arr.length) {
      return;
    }
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
      if (!visited[arr[i]]) {
        visited[arr[i]] = true;
        newArr = newArr.concat(rooms[arr[i]]);
      }
    }
    subFunc(newArr);
  };

  subFunc(rooms[0]);

  for (let i = 1; i < rooms.length; i++) {
    if (!visited[i]) {
      return false;
    }
  }
  return true;
};
// @lc code=end
