

function diagonalDifference(arr) {
  // Write your code here
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

let arr = [
  [11, 2, 4],
  [4, 5, 6],
  [10, 8, -12]
];

console.log(diagonalDifference(arr));