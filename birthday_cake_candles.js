/*
You are in charge of the cake for your niece's birthday and have decided the 
cake will have one candle for each year of her total age. When she blows out 
the candles, she’ll only be able to blow out the tallest ones. Your task is to 
find out how many candles she can successfully blow out.

For example, if your niece is turning 4 years old, and the cake will have 4
candles of height 4, 4, 1, 3, she will be able to blow out 2 candles 
successfully, since the tallest candles are of height 4 and there are 2 such 
candles

Input Format:

The first line contains a single integer, n, denoting the number of candles on
the cake. The second line contains n space-separated integers, where each
integer i describes the height of candle i.

Output Format;

Return the number of candles that can be blown out on a new line.

Sample Input:

4
3 2 1 3

Sample Output:

2
*/

function birthdayCakeCandles(arr) {
  debugger;
  let tallestCandleCount = 0;
  let max = Math.max(...arr);
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === max) {
      tallestCandleCount += 1;
    }
  }
  return tallestCandleCount;
}

console.log(birthdayCakeCandles([3, 2, 1, 3]));