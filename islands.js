/*
// the 1's are land the 0's are sea, return the count of the islands on the grid
// Islands are created only by connections from the top, right, bottom, and left

Input:

[[1, 1, 0, 0],
 [1, 0, 1, 0],
 [1, 0, 0, 1]]

[[a, b, 0, 0],
 [c, 0, e, 0],
 [d, 0, 0, f]]
// Output: 
  3
*/

function didSinkIsland(arr2d, row, col) {
  if (arr2d[row][col] === 1) {
    const sinkSoon = [[row, col]];
    while (sinkSoon.length > 0) {
      let currLand = sinkSoon.pop();
      let nextToThis = nextTo(arr2d, currLand[0], currLand[1]);
      nextToThis = nextToThis.filter(
        ([ntRow, ntCol]) => arr2d[ntRow][ntCol] === 1
      );
      nextToThis.forEach(ssSpot => {
        sinkSoon.push(ssSpot);
      });
      arr2d[currLand[0]][currLand[1]] = 0;
    }
    return true;
  }
  return false;
}

function nextTo(arr2d, row, col) {
  const answer = [];
  if (!(row - 1 < 0) && !(row - 1 >= arr2d.length)) {
    const up = [row - 1, col];
    answer.push(up);
  }
  if (!(row + 1 < 0) && !(row + 1 >= arr2d.length)) {
    const down = [row + 1, col];
    answer.push(down);
  }
  if (!(col - 1 < 0) && !(col - 1 >= arr2d[0].length)) {
    const left = [row, col - 1];
    answer.push(left);
  }
  if (!(col + 1 < 0) && !(col + 1 >= arr2d[0].length)) {
    const right = [row, col + 1];
    answer.push(right);
  }
  return answer;
}

function islands(arr2d) {
  debugger;
  let count = 0;
  for (let i = 0; i < arr2d.length; i++) {
    for (let j = 0; j < arr2d[i].length; j++) {
      if (didSinkIsland(arr2d, i, j)) {
        count += 1;
      }
    }
  }
  return count;
}

const i = [
  [1, 1, 0, 0], 
  [1, 0, 1, 0], 
  [1, 0, 0, 1]
];

console.log(islands(i));