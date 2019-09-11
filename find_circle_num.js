/*
There are N students in a class.Some of them are friends, while some are not.
Their friendship is transitive in nature.For example, if A is a direct friend 
of B, and B is a direct friend of C, then A is an indirect friend of C.And we 
defined a friend circle is a group of students who are direct or indirect 
friends.

Given a N * N matrix M representing the friend relationship between students in 
the class.If M[i][j] = 1, then the ith and jth students are direct friends with 
each other, otherwise not.And you have to output the total number of friend 
circles among all the students.

  Example 1:
Input:
[[1, 1, 0],
[1, 1, 0],
[0, 0, 1]]
Output: 2

Explanation: The 0th and 1st students are direct friends, so they are in a 
friend circle.
  The 2nd student himself is in a friend circle.So return 2.
  Example 2:
Input:
[[1, 1, 0],
[1, 1, 1],
[0, 1, 1]]
Output: 1

Explanation: The 0th and 1st students are direct friends, the 1st and 2nd 
students are direct friends, so the 0th and 2nd students are indirect friends.
All of them are in the same friend circle, so return 1.
Note:
N is in range[1, 200].
  M[i][i] = 1 for all students.
If M[i][j] = 1, then M[j][i] = 1.
*/

// function directFriends(arr2d, row, col) {
//   if (arr2d[row][col] === 1) {
//     const sinkSoon = [[row, col]];
//     while (sinkSoon.length > 0) {
//       let currLand = sinkSoon.pop();
//       let nextToThis = nextTo(arr2d, currLand[0], currLand[1]);
//       if (nextToThis.every(([ntRow, ntCol]) => arr2d[ntRow][ntCol] === 0)) {
//         continue;
//       }
//       nextToThis = nextToThis.filter(
//         ([ntRow, ntCol]) => arr2d[ntRow][ntCol] === 1
//       );
//       nextToThis.forEach(ssSpot => {
//         sinkSoon.push(ssSpot);
//       });
//       arr2d[currLand[0]][currLand[1]] = 0;
//     }
//     return true;
//   }
//   return false;
// }

// function nextTo(arr2d, row, col) {
//   const answer = [];
//   if (!(row - 1 < 0) && !(row - 1 >= arr2d.length)) {
//     const up = [row - 1, col];
//     answer.push(up);
//   }
//   if (!(row + 1 < 0) && !(row + 1 >= arr2d.length)) {
//     const down = [row + 1, col];
//     answer.push(down);
//   }
//   if (!(col - 1 < 0) && !(col - 1 >= arr2d[0].length)) {
//     const left = [row, col - 1];
//     answer.push(left);
//   }
//   if (!(col + 1 < 0) && !(col + 1 >= arr2d[0].length)) {
//     const right = [row, col + 1];
//     answer.push(right);
//   }
//   return answer;
// }

// function findCircleNum(arr2d) {
//   let count = 0;
//   for (let i = 0; i < arr2d.length; i++) {
//     for (let j = 0; j < arr2d[i].length; j++) {
//       if (directFriends(arr2d, i, j)) {
//         count += 1;
//       }
//     }
//   }
//   return count;
// }


var findCircleNum = function (M) {
  debugger;
  let visited = new Array(M.length).fill(false), cnt = 0;
  for (let i = 0; i < M.length; i++) {
    if (visited[i] === false) {
      visited[i] = true;
      helper(M, visited, i);
      cnt++;
    }
  }
  return cnt;
};

const helper = function (mat, visited, i) {
  for (let j = 0; j < mat.length; j++) {
    if (mat[i][j] === 1 && visited[j] === false) {
      visited[j] = true;
      helper(mat, visited, j);
    }
  }
};

let matrix = [
  [1, 0, 0, 1], 
  [0, 1, 1, 0], 
  [0, 1, 1, 1], 
  [1, 0, 1, 1]
];

let matrix2 = [
  [1, 1, 0],
  [1, 1, 0],
  [0, 0, 1]
];

console.log(findCircleNum(matrix));