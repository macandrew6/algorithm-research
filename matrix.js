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


let checkForZero = function(matrix, row, col) {
  // returns all the neighboring coordinates to the current element
  let neighbors = [];
  if (!(row - 1 < 0) && !(row - 1 >= matrix.length)) {
    let up = [row - 1, col];
    neighbors.push(up);
  }
  if (!(row + 1 < 0) && !(row + 1 >= matrix.length)) {
    let down = [row + 1, col];
    neighbors.push(down);
  }
  if (!(col - 1 < 0) && !(col - 1 >= matrix[0].length)) {
    let left = [row, col - 1];
    neighbors.push(left);
  }
  if (!(col + 1 < 0) && !(col + 1 >= matrix[0].length)) {
    let right = [row, col + 1];
    neighbors.push(right);
  }

  return neighbors;
};

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
        let neighbors = checkForZero(matrix, currSpot[0], currSpot[1]);
        neighbors.forEach(coord => {
          queue.push(coord);
        });
        if (matrix[row][col] === 0) return step;
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


// var updateMatrix = function (matrix) {
//   debugger;
//   let bfs = (row, col) => {
//     let queue = [{ row, col }];
//     let step = 0;
//     while (queue.length) {
//       let len = queue.length;
//       while (len) {
//         let { row, col } = queue.shift();
//         if (row > 0) queue.push({ row: row - 1, col });
//         if (col > 0) queue.push({ row, col: col - 1 });
//         if (row < matrix.length - 1) queue.push({ row: row + 1, col });
//         if (col < matrix[0].length - 1) queue.push({ row, col: col + 1 });

//         if (matrix[row][col] === 0) return step;
//         len--;
//       }
//       step++;
//     }
//   };

//   return matrix.map((r, rIdx) => {
//     return r.map((c, cIdx) => {
//       return matrix[rIdx][cIdx] === 0 ? 0 : bfs(rIdx, cIdx);
//     });
//   });
// };

let matrix = [
  [0, 0, 0],
  [0, 1, 0],
  [1, 1, 1]
];

console.log(updateMatrix(matrix));