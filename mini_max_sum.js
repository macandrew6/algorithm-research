/*
Input Format:

A single line of five space - separated integers.

Output Format:

Print two space-separated long integers denoting the respective minimum and 
maximum values that can be calculated by summing exactly four of the five 
integers. (The output can be greater than a 32 bit integer.)

Sample Input:

1 2 3 4 5

Sample Output:

10 14
*/

function miniMaxSum(arr) {
  let sumValues = [];
  for (let i = 0; i < arr.length; i++) {
    let sum = 0;
    for (let j = 0; j < arr.length; j++) {
      if (i !== j) {
        sum += arr[j];
      }
    }
    sumValues.push(sum);
  }
  return [Math.min(...sumValues), Math.max(...sumValues)];
}

let arr = [1, 2, 3, 4, 5];
console.log(miniMaxSum(arr));