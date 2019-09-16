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


// come back to this problem
// strategy:
  // use a graph data structure
  // dfs or bfs
  // 
  /*
      A B C D
    A[1,0,0,0],
    B[0,1,0,0],
    C[0,0,1,0],
    D[0,0,0,1]
  */
function circleCount(M) {
  console.log("input:");
  M.forEach(row => {
    console.log(row);
  });
  const seen = new Set();
  let groupCount = 0;
  for (let i = 0; i < M.length; i++) {
    const row = M[i];
    for (let j = 0; j < row.length; j++) {
      const isFriend = row[j] === 1;
      if (isFriend && !seen.has(i)) {
        groupCount++;
        bfs(M, i, seen);
        break;
      }
    }
  }
  console.log("after:");
  M.forEach(row => {
    console.log(row);
  });
  return groupCount;
}

function bfs(M, i, seen) {
  const queue = [i];
  while (queue.length) {
    const rowIdx = queue.shift();
    seen.add(rowIdx);
    for (let j = 0; j < M[rowIdx].length; j++) {
      const isFriend = M[rowIdx][j] === 1;
      if (rowIdx !== j && isFriend && !seen.has(j)) {
        M[rowIdx][j] = 0;
        M[j][rowIdx] = 0;
        queue.push(j);
      }
    }
  }
}

const e1 = [
  [1, 1, 0, 0, 0, 0], //
  [1, 1, 0, 0, 0, 0],
  [0, 0, 1, 0, 0, 1],
  [0, 0, 0, 1, 1, 0],
  [0, 0, 0, 1, 1, 0],
  [0, 0, 1, 0, 0, 1]
];

const e2 = [
  [1, 1, 0], //
  [1, 1, 0],
  [0, 0, 1]
];

const e3 = [
  [1, 0, 0, 0, 0, 0], //
  [0, 1, 0, 0, 0, 0],
  [0, 0, 1, 0, 0, 0],
  [0, 0, 0, 1, 0, 0],
  [0, 0, 0, 0, 1, 0],
  [0, 0, 0, 0, 0, 1]
];

console.log(`\n---e1:---`);
console.log(circleCount(e1));
console.log(`\n---e2:---`);
console.log(circleCount(e2));
console.log(`\n---e3:---`);
console.log(circleCount(e3));


// var findCircleNum = function (M) {
//   debugger;
//   let visited = new Array(M.length).fill(false), cnt = 0;
//   for (let i = 0; i < M.length; i++) {
//     if (visited[i] === false) {
//       visited[i] = true;
//       helper(M, visited, i);
//       cnt++;
//     }
//   }
//   return cnt;
// };

// const helper = function (mat, visited, i) {
//   for (let j = 0; j < mat.length; j++) {
//     if (mat[i][j] === 1 && visited[j] === false) {
//       visited[j] = true;
//       helper(mat, visited, j);
//     }
//   }
// };

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