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

let checkForZero = function(matrix, x, y) {
  // returns the steps taken to the closest 0
  // increment the step count each time we check all four sides and there are no
  // 1's
  // increments x and y values and decrement x and y values by 1
  // check again
  let steps = 0;

  return steps;
};

let updateMatrix = function(matrix) {
  // iterate through the grid
  // find the 1's
  // when you find the 1st 1
  // init a variable counter
  // we check the up down left and right coordinates
    // if one of those coordinates is a 0
    // counter += 1
    // 1st 1's coordinate is equal to the counter
    // else we check the coordinates again 1 step further

};