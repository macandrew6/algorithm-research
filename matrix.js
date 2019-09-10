/*
Given a matrix consists of 0 and 1, find the distance of the nearest 0 for each 
cell.

The distance between two adjacent cells is 1.

Example 1:

Input:
[[0, 0, 0],
 [0, 1, 0],
 [0, 0, 0]]

Output:
[[0, 0, 0],
 [0, 1, 0],
 [0, 0, 0]]

Example 2:

Input:
[[0, 0, 0],
 [0, 1, 0],
 [1, 1, 1]]

Output:
[[0, 0, 0],
 [0, 1, 0],
 [1, 2, 1]]


Note:

The number of elements of the given matrix will not exceed 10, 000.
There are at least one 0 in the given matrix.
The cells are adjacent in only four directions: up, down, left and right.
*/

let updateMatrix = function(matrix) {
  // use a bfs searching algorithm
  debugger;
  let bfs = (row, col) => {
    let queue = [[row, col]];
    let step = 0;
    while (queue.length) {
      let len = queue.length;
      while (len) {
        let currSpot = queue.shift();
        if (!(currSpot[0] - 1 < 0) && !(currSpot[0] - 1 >= matrix.length)) {
          let up = [currSpot[0] - 1, currSpot[1]];
          queue.push(up);
        }
        if (!(currSpot[0] + 1 < 0) && !(currSpot[0] + 1 >= matrix.length)) {
          let down = [currSpot[0] + 1, currSpot[1]];
          queue.push(down);
        }
        if (!(currSpot[1] - 1 < 0) && !(currSpot[1] - 1 >= matrix[0].length)) {
          let left = [currSpot[0], currSpot[1] - 1];
          queue.push(left);
        }
        if (!(currSpot[1] + 1 < 0) && !(currSpot[1] + 1 >= matrix[0].length)) {
          let right = [currSpot[0], currSpot[1] + 1];
          queue.push(right);
        }
        if (matrix[currSpot[0]][currSpot[1]] === 0) return step;
        len--;
      }
      step++;
    }
  };

  return matrix.map((row, rIdx) => {
    return row.map((col, cIdx) => {
      return matrix[rIdx][cIdx] === 0 ? 0 : bfs(rIdx, cIdx);
    });
  });

};


let matrix = [
  [0, 0, 0],
  [0, 1, 0],
  [1, 1, 1]
];

console.log(updateMatrix(matrix));