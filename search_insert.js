/*
Given a sorted array and a target value, return the index if the target is 
found.If not, return the index where it would be if it were inserted in order.

You may assume no duplicates in the array.

  Example 1:

Input: [1, 3, 5, 6], 5
Output: 2
Example 2:

Input: [1, 3, 5, 6], 2
Output: 1
Example 3:

Input: [1, 3, 5, 6], 7
Output: 4
Example 4:

Input: [1, 3, 5, 6], 0
Output: 0
*/

// sub optimal solution
// function searchInsert(nums, target) {
//   let newArr = [...nums, target].sort((a, b) => a - b);
//   console.log(newArr);
//   for (let i = 0; i < newArr.length; i++) {
//     if (newArr[i] === target) {
//       return i;
//     }
//   }
// }

function searchInsert(nums, target) {
  let start = 0, mid = 0, end = nums.length - 1;
  while (start <= end) {
    mid = Math.floor((start + end) / 2);
    if (nums[mid] < target) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }

  return start;
}

let nums = [1, 2, 3, 4, 5, 10];
let target = 15;

console.log(searchInsert(nums, target));