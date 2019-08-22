/*
You must print the following  lines:

1. A decimal representing of the fraction of positive numbers in the array compared to its size.
2. A decimal representing of the fraction of negative numbers in the array compared to its size.
3. A decimal representing of the fraction of zeros in the array compared to its size.


sample input 
6
-4 3 -9 0 4 1  

sample output
0.500000 - positive
0.333333 - negetive
0.166667 - zero(s) 
*/

function plusMinus(arr) {
  let posRatio = 0;
  let negRatio = 0;
  let zeroRatio = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      posRatio += 1;
    } else if (arr[i] < 0) {
      negRatio += 1;
    } else {
      zeroRatio += 1;
    }
  }
  console.log(
    (posRatio / arr.length).toFixed(6) + "\n",
    (negRatio / arr.length).toFixed(6) + "\n",
    (zeroRatio / arr.length).toFixed(6)
  );
}

let arr = [-4, 3, -9, 0, 4, 1];

console.log(plusMinus(arr));