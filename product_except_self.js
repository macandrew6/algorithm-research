/*
Given an array nums of n integers where n > 1,  return an array output such that
output[i] is equal to the product of all the elements of nums except nums[i].

Example:

Input:  [1,2,3,4]
Output: [24,12,8,6]
Note: Please solve it without division and in O(n).

Follow up:
Could you solve it with constant space complexity? (The output array does not 
count as extra space for the purpose of space complexity analysis.)
*/

function productExceptSelf(nums) {
  let len = nums.length;
  let leftProduct = [];
  leftProduct[0] = 1;
  for (let i = 1; i < len; i++) { // i = 4
    leftProduct[i] = leftProduct[i - 1] * nums[i - 1]; // 6 * 4 = 24
  }

  let result = [];
  let rightProduct = 1;
  for (let i = len - 1; i >= 0; i--) { // i = 0
    result[i] = leftProduct[i] * rightProduct; // 1 * 24 = 24
    rightProduct *= nums[i];
  }
  return result;
}

productExceptSelf([1, 2, 3, 4]);

/* 
nums = [1, 2, 3, 4]
len = 4
leftProduct = [1, 1, 2, 6]
result = [24, 12, 8, 6]
rightProduce = 24

*/

/*
let result = [];
for (let i = 0; i < nums.length; i++) {
  let tempNums = nums.slice();
  tempNums.splice(i, 1);
  let products = tempNums.reduce((a, b) => a * b);
  result.push(products);
}
return result;
*/