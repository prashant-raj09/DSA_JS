/**
 * Problem: maximum Subarray Sum
 * Input: [-2,1,-3,4,-1,2,1,-5,4]
 * Output: 6
    Explanation: [4,-1,2,1] has the largest sum = 6.    
 *
 * Approach: Recursion
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */

let nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4];

const maxSumSubarray = (arr) => {
  let currSum = 0;
  let maxSum = -Infinity;
  for (let item of arr) {
    currSum += item;
    maxSum = Math.max(maxSum, currSum);
    if (currSum < 0) {
      currSum = 0;
    }
  }  return maxSum;
};

const maxSum = maxSumSubarray(nums);
console.log(maxSum); // 6
