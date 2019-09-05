/*
Say you have an array for which the ith element is the price of a given stock on
day i.

If you were only permitted to complete at most one transaction(i.e., buy one and
sell one share of the stock), design an algorithm to find the maximum profit.

Note that you cannot sell a stock before you buy one.

  Example 1:

Input: [7, 1, 5, 3, 6, 4]
Output: 5
Explanation: Buy on day 2(price = 1) and sell on day 5(price = 6), 
profit = 6 - 1 = 5.
Not 7 - 1 = 6, as selling price needs to be larger than buying price.

  Example 2:

Input: [7, 6, 4, 3, 1]
Output: 0
Explanation: In this case, no transaction is done, i.e.max profit = 0.
*/

// failing test case: [2, 4, 1]

function maxProfit(prices) {
  // (1) Iterate through each number in the list
  // (2) At the ith index, get the i + 1 index price and check if it is larger 
  //     than the ith index price
  // (3) If so, set buy_price = i and sell_price = i + 1. Then calculate the 
  //     profit: sell_price - buy_price.
  // (4) If a stock price is found that is cheaper than the current buy_price,
  //     set this to be the new buying price and continue from step 2.
  // (5) Otherwise, continue changing only the sell_price and keep buy_price 
  //     set.
  let currentMaxProfit = -1;
  let buyPrice = 0;
  let sellPrice = 0;

  let changeMaxIndex = true;

  for (let i = 0; i < prices.length; i++) {
    sellPrice = prices[i + 1];
  }
}