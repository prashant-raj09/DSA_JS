/**
 * Problem: Rotate Array
 * Given an integer array nums, rotate the array to the right by k steps, where k is non-negative.
 *
 * Example 1:
 *
    * Input: nums = [1,2,3,4,5,6,7], k = 3
    * Output: [5,6,7,1,2,3,4]
    * Explanation:
    * rotate 1 steps to the right: [7,1,2,3,4,5,6]
    * rotate 2 steps to the right: [6,7,1,2,3,4,5]
    * rotate 3 steps to the right: [5,6,7,1,2,3,4]
    *
* Example 2:

    Input: nums = [-1,-100,3,99], k = 2
    Output: [3,99,-1,-100]
    Explanation: 
    rotate 1 steps to the right: [99,-1,-100,3]
    rotate 2 steps to the right: [3,99,-1,-100]

    Constraints:

        1 <= nums.length <= 105
        -231 <= nums[i] <= 231 - 1
        0 <= k <= 105
    */


let nums = [1, 2, 3, 4, 5, 6, 7];
let k = 3;

const reverse = (arr, start, end) => {
    while (start < end) {
        let temp = arr[start];  
        arr[start] = arr[end];
        arr[end] = temp;

        /* Alternatively, using destructuring assignment:
            [arr[start], arr[end]] = [arr[end], arr[start]];
        */
       
        start++;
        end--;
    }
}

const rotateArray = (arr, k) => {
    k = k % arr.length; // In case k is greater than array length
    reverse(arr, 0, arr.length - k - 1);
    reverse(arr, arr.length - k, arr.length - 1);
    reverse(arr, 0, arr.length - 1);
    return arr;
}

const rotatedArray = rotateArray(nums, k);
console.log(rotatedArray); // [5,6,7,1,2,3,4]