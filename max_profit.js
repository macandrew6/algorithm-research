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

  // this allows our loop to keep iterating the buying price until a cheap 
  // stock price is found
  let changeBuyIndex = true;

  // loop through the stock prices once
  for (let i = 0; i < prices.length; i++) { // [2, 7, 6, 4, 3, 1] i = 4
    // sell price is the next element in the list
    sellPrice = prices[i + 1];

    // if we have not found a suitable cheap buying price yet we set the 
    // buying price equal to the current element
    if(changeBuyIndex) buyPrice = prices[i];

    // if the selling price is less than the buying price we know that we 
    // cannot make a profit so we move to the next item in the list which will
    // be the new buying price
    if(sellPrice < buyPrice) {
      changeBuyIndex = true;
      continue;
    } 
    // if the selling price is greater than the buying price we check to see
    // if these two indices give us a better profit then what we currently have
    else {
      let tempProfit = sellPrice - buyPrice; // 1 - 2 = -1
      if(tempProfit > currentMaxProfit) currentMaxProfit = tempProfit;
      changeBuyIndex = false;
    }
  }
  return currentMaxProfit;
}

/*
Testing: 

[2, 7, 6, 4, 3, 1]  
currentMaxProfit = 5; 
buyPrice = 2; 
sellPrice = 1; 
changeBuyIndex = true

*/
maxProfit([2, 7, 6, 1, 4, 3, 8]);