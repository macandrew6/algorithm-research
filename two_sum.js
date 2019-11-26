/*
Given an array of integers, return indices of the two numbers such that they add
 up to a specific target.

You may assume that each input would have exactly one solution, and you may not
use the same element twice.

  Example:

Given nums = [2, 7, 11, 15], target = 9,

Because nums[0] + nums[1] = 2 + 7 = 9,
return [0, 1].
*/

// brute force O(n^2) time O(1) space solution

var twoSum = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i; j < nums.length; j++) {
      if (i !== j && nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
};

// O(n) time O(n) space solution

var twoSum2 = function(nums, target) {
  let hash = new Map();
  let result = [];

  for (let i = 0; i < nums.length; i++) {
    hash.set(i, nums[i]);
  }

  for (let i = 0; i < nums.length; i++) {
    let compliment = target - nums[i];
    // console.log(compliment);
    if (hash.has(compliment)) { // somehow obtain key from map
      result[0] = i;
      result[1] = hash.get(i);
      return result;
    }
  }
  return result;
    // let numberIndex = new Map();
    // let result = [];

    // for (let i = 0; i < nums.length; i++) {
    //   let num = nums[i];
    //   let complement = target - num;

    //   if (numberIndex.has(complement)) {
    //     result[0] = numberIndex.get(complement);
    //     result[1] = i;

    //     return result;
    //   }

    //   numberIndex.set(num, i);
    // }

    // return result;
};

console.log(twoSum2([1, 2, 3, 4], 5));