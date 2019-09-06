

function diagonalDifference(arr) {
  // Write your code here
  debugger;
  let rightDiagSum = 0;
  let leftDiagSum = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (i === j) {
        rightDiagSum += arr[i][j];
      }
      if (i === arr.length - j - 1) {
        leftDiagSum += arr[i][j];
      }

    }
  }
  return rightDiagSum - leftDiagSum;
}

/*
i = 2; j = 2;
arr.length - 2 - 1 = 3 - 2 - 1 = 0
rightSum = 11 + 5 + -12 = 4
leftSum = 4 + 5 + 10 = 19
output = -15
*/

let arr = [
  [11, 2, 4],
  [4, 5, 6],
  [10, 8, -12]
];

console.log(diagonalDifference(arr));